import React, { useState, useEffect } from 'react';
import './Ejercicios.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import axios from 'axios';
import Spiral from '../Spiral/Spiral';

export default function Ejercicios() {
    const [ejercicios, setEjercicios] = useState([]);
    const [showSpiral, setShowSpiral] = useState(true);
    const [searchTitle, setSearchTitle] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get('https://fitness-ue8o.onrender.com/ejercicios')
            .then((response) => {
                setTimeout(() => {
                    setEjercicios(response.data.ejercicios);
                    setShowSpiral(false);
                    // Obtener todas las categorías sin repetirse
                    const allCategories = response.data.ejercicios.map(
                        (ejercicio) => ejercicio.categoria
                    );
                    const uniqueCategories = [...new Set(allCategories)];
                    setCategories(uniqueCategories);
                }, 2000);
            })
            .catch((error) => {
                console.error('Error al obtener los ejercicios:', error);
            });
    }, []);

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

    return (
        <div>
            {showSpiral && <Spiral />}
            {!showSpiral && (
                <div>
                    <div className='filtros'>
                        <div>
                            <input
                                type="text"
                                value={searchTitle}
                                onChange={(e) => setSearchTitle(e.target.value)}
                                placeholder="Buscar por título"
                                className='inputEjercicios'
                            />
                        </div>
                        <div className='categoria-filtro'>
                            <label>
                                <input
                                    type="checkbox"
                                    name="category"
                                    value=""
                                    checked={selectedCategory === ''}
                                    onChange={() => setSelectedCategory('')}
                                />
                                Todas
                            </label>

                            {categories.map((category) => (
                                <label key={category}>
                                    <input
                                        type="checkbox"
                                        name="category"
                                        value={category}
                                        checked={selectedCategory === category}
                                        onChange={() => setSelectedCategory(category)}
                                    />
                                    {category}
                                </label>
                            ))}
                        </div>

                    </div>
                    <div className="cards-contain">
                        {filteredEjercicios.length > 0 ? (
                            filteredEjercicios.map((ejercicio) => (
                                <div key={ejercicio.id} className="card">
                                    <img src={ejercicio.img} alt={ejercicio.ejercicio} />
                                    <div className="card-text">
                                        <h4>{ejercicio.title.slice(0, 20)}...</h4>
                                        <p>{ejercicio.description.slice(0, 55)}..</p>
                                        <Link to={`/ejercicios/${ejercicio._id}`}>
                                            Ver más <FontAwesomeIcon icon={faSignOutAlt} />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No hay resultados.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );

}  