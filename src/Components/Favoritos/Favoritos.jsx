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
        <div className='favorito-component'>
            <h1>Favoritos</h1>
            {favoritos.length > 0 ? (
                <div>
                    <button onClick={removeAllFavoritos}>Remover Todos los Favoritos</button>
                    <div className='favoritos-contain'>
                        {favoritos.map((ejercicio) => (

                            <div key={ejercicio._id} className='card-lateral'>
                                <img src={ejercicio.img} alt="" />
                                <div className='card-lateral-text'>
                                    <button className="delete-button" onClick={() => removeEjercicioSeleccionado(ejercicio._id)}>  X</button>
                                    <h4>{ejercicio.title.slice(0, 20)}..</h4>

                                    <p>{ejercicio.description.slice(0, 40)}...</p>
                                    <Link to={`/ejercicios/${ejercicio._id}`}>
                                        <FontAwesomeIcon icon={faSignOutAlt} />  Ver más
                                    </Link>


                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            ) : (
                <p>No tienes ejercicios guardados como favoritos.</p>
            )}
        </div>
    );

}
