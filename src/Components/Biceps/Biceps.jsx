import React, { useEffect, useState } from 'react';
import { ejercicios } from '../data'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import './Biceps.css'
import HeroBiceps from './HeroBiceps';
import axios from 'axios'; // Importar axios
export default function Biceps() {
    const [ejerciciosAbdominales, setEjerciciosAbdominales] = useState([]);

    useEffect(() => {
        axios.get('https://fitness-ue8o.onrender.com/ejercicios')
            .then(response => {
                const ejercicios = response.data.ejercicios;
                const ejerciciosFiltrados = ejercicios.filter(ejercicio => ejercicio.categoria === "Biceps");
                setEjerciciosAbdominales(ejerciciosFiltrados);
                console.log(ejerciciosFiltrados)
                console.log(ejercicios)
            })
            .catch(error => {
                console.error('Error al obtener los ejercicios:', error);
            });
    }, []);
    return (
        <div>
            <HeroBiceps />
            <div className='cards-contain'>
                {ejerciciosAbdominales.map((ejercicio) => (
                    <div key={ejercicio.id} className='card'>
                        <img src={ejercicio.img} alt={ejercicio.ejercicio} />
                        <div className='card-text'>
                            <h4>{ejercicio.title.slice(0, 20)}...</h4>
                            <p>{ejercicio.description.slice(0, 55)}..</p>
                            <Link to={`/ejercicios/${ejercicio._id}`}>
                                Ver más <FontAwesomeIcon icon={faSignOutAlt} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
