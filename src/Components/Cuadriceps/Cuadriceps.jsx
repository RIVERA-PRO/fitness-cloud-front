import React, { useEffect, useState } from 'react';
import './Cuadriceps.css'
import { ejercicios } from '../data'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import HeroCuadriceps from './HeroCuadriceps';
import axios from 'axios'; // Importar axios
export default function Cuadriceps() {
    const [ejerciciosAbdominales, setEjerciciosAbdominales] = useState([]);
    const [favoritos, setFavoritos] = useState([]);
    const [coloresFavoritos, setColoresFavoritos] = useState({});
    useEffect(() => {
        axios.get('https://fitness-ue8o.onrender.com/ejercicios')
            .then(response => {
                const ejercicios = response.data.ejercicios;
                const ejerciciosFiltrados = ejercicios.filter(ejercicio => ejercicio.categoria === "Cuadriceps");
                setEjerciciosAbdominales(ejerciciosFiltrados);
                console.log(ejerciciosFiltrados)
                console.log(ejercicios)
            })
            .catch(error => {
                console.error('Error al obtener los ejercicios:', error);
            });
    }, []);
    useEffect(() => {
        const favoritosGuardados = JSON.parse(
            localStorage.getItem('favoritos')
        ) || [];
        setFavoritos(favoritosGuardados);

        const colores = {};
        favoritosGuardados.forEach((ejercicio) => {
            const colorFavorito = localStorage.getItem(`colorFavorito_${ejercicio._id}`);
            if (colorFavorito) {
                colores[ejercicio._id] = colorFavorito;
            }
        });
        setColoresFavoritos(colores);
    }, []);

    const toggleFavorito = (ejercicio) => {
        if (favoritos.includes(ejercicio)) {
            const nuevosFavoritos = favoritos.filter((ej) => ej._id !== ejercicio._id);
            setFavoritos(nuevosFavoritos);
            localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
            localStorage.removeItem(`colorFavorito_${ejercicio._id}`);
            setColoresFavoritos((prevColores) => {
                const nuevosColores = { ...prevColores };
                delete nuevosColores[ejercicio._id];
                return nuevosColores;
            });
        } else {
            const nuevosFavoritos = [...favoritos, ejercicio];
            setFavoritos(nuevosFavoritos);
            localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
            localStorage.setItem(`colorFavorito_${ejercicio._id}`, 'red');
            setColoresFavoritos((prevColores) => ({
                ...prevColores,
                [ejercicio._id]: 'red',
            }));
        }
    };
    return (
        <div>
            <HeroCuadriceps />
            <div className="cards-contain">
                {ejerciciosAbdominales.map((ejercicio) => {
                    const esFavorito = favoritos.some((fav) => fav._id === ejercicio._id);
                    const colorFavorito = coloresFavoritos[ejercicio._id] || '';

                    return (
                        <div key={ejercicio._id} className="card">
                            <button
                                id={`favoritoButton_${ejercicio._id}`}
                                className={`favorito-button ${esFavorito ? 'favorito-active' : ''}`}
                                style={{ color: colorFavorito }}
                                onClick={() => toggleFavorito(ejercicio)}
                            >
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                            <img src={ejercicio.img} alt={ejercicio.ejercicio} />
                            <div className="card-text">
                                <h4>{ejercicio.title.slice(0, 20)}...</h4>
                                <p>{ejercicio.description.slice(0, 55)}..</p>
                                <Link to={`/ejercicios/${ejercicio._id}`}>
                                    Ver más <FontAwesomeIcon icon={faSignOutAlt} />
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    )
}
