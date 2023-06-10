import React, { useState, useEffect } from 'react';
import './Favoritos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
export default function Favoritos() {

    const [favoritos, setFavoritos] = useState([]);
    useEffect(() => {
        const favoritosGuardados = localStorage.getItem('favoritos');
        if (favoritosGuardados) {
            setFavoritos(JSON.parse(favoritosGuardados));
        }
    }, []);
    const removeEjercicioSeleccionado = (ejercicioId) => {
        const nuevosFavoritos = favoritos.filter((ejercicio) => ejercicio._id !== ejercicioId);
        setFavoritos(nuevosFavoritos);
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    };

    const removeAllFavoritos = () => {
        setFavoritos([]);
        localStorage.removeItem('favoritos');
    };

    return (
        <div className='favoritos-contain'>
            <h1>Favoritos</h1>
            {favoritos.length > 0 ? (
                <div>
                    <button onClick={removeAllFavoritos}>Remover Todos los Favoritos</button>
                    {favoritos.map((ejercicio) => (
                        <div key={ejercicio._id}>
                            <h2>{ejercicio.title}</h2>
                            <p>{ejercicio.description}</p>
                            <Link to={`/ejercicios/${ejercicio._id}`}>
                                Ver más <FontAwesomeIcon icon={faSignOutAlt} />
                            </Link>
                            <button onClick={() => removeEjercicioSeleccionado(ejercicio._id)}>Remover  <FontAwesomeIcon icon={faHeart} className="heart-icon" /></button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No tienes ejercicios guardados como favoritos.</p>
            )}
        </div>
    );

}
