import React, { useState, useEffect } from 'react';
import './Ejercicios.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import axios from 'axios';
import Spiral from '../Spiral/Spiral';

export default function Ejercicios() {
    const [ejercicios, setEjercicios] = useState([]);
    const [showSpiral, setShowSpiral] = useState(true);
    const [searchTitle, setSearchTitle] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [coloresFavoritos, setColoresFavoritos] = useState({});
    const [favoritos, setFavoritos] = useState([]);


    useEffect(() => {
        axios
            .get('https://fitness-ue8o.onrender.com/ejercicios')
            .then((response) => {
                setTimeout(() => {
                    const ejercicios = response.data.ejercicios;
                    const sortedEjercicios = sortDescending(ejercicios, 'title'); // Ordenar los ejercicios de forma descendente
                    setEjercicios(sortedEjercicios);
                    setShowSpiral(false);
                    const allCategories = sortedEjercicios.map((ejercicio) => ejercicio?.categoria);
                    const uniqueCategories = [...new Set(allCategories)];
                    setCategories(uniqueCategories);
                }, 2000);
            })
            .catch((error) => {
                console.error('Error al obtener los ejercicios:', error);
            });
    }, []);

    // Función para ordenar el array de ejercicios de forma descendente
    const sortDescending = (array, key) => {
        return array.sort((a, b) => {
            const itemA = a[key].toUpperCase();
            const itemB = b[key].toUpperCase();
            if (itemA < itemB) {
                return 1;
            }
            if (itemA > itemB) {
                return -1;
            }
            return 0;
        });
    };

    const filteredEjercicios = ejercicios.filter((ejercicio) => {
        const ejercicioTitle = ejercicio.title.toLowerCase();
        const searchTitleLowerCase = searchTitle.toLowerCase();
        if (searchTitle !== '' && !ejercicioTitle.includes(searchTitleLowerCase)) {
            return false;
        }

        if (selectedCategory !== '' && ejercicio.categoria !== selectedCategory) {
            return false;
        }

        return true;
    });
    useEffect(() => {
        const favoritosGuardados = JSON.parse(localStorage.getItem('favoritos')) || [];
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
            {showSpiral && <Spiral />}
            {!showSpiral && (
                <div>
                    <div className="filtros">
                        <div>
                            <input
                                type="text"
                                value={searchTitle}
                                onChange={(e) => setSearchTitle(e.target.value)}
                                placeholder="Buscar Ejercicio"
                                className="inputEjercicios"
                            />
                        </div>
                        <div className="categoria-filtro">
                            <label>
                                <input
                                    type="radio"
                                    name="category"
                                    value=""
                                    checked={selectedCategory === ""}
                                    onChange={() => setSelectedCategory("")}
                                />
                                <span>Todas</span>
                            </label>

                            {categories.map((category) => (
                                <label key={category}>
                                    <input
                                        type="radio"
                                        name="category"
                                        value={category}
                                        checked={selectedCategory === category}
                                        onChange={() => setSelectedCategory(category)}
                                    />
                                    <span> {category}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="cards-contain">
                        {filteredEjercicios.length > 0 ? (
                            filteredEjercicios.map((ejercicio) => {
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
                                            <p>{ejercicio.description.slice(0, 50)}..</p>
                                            <Link to={`/ejercicios/${ejercicio._id}`}>
                                                Ver más <FontAwesomeIcon icon={faSignOutAlt} />
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <p className='no-result'>No hay resultados.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}      