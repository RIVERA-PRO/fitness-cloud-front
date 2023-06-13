import React, { useState, useEffect } from 'react';
import './CardsX.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import axios from 'axios'; // Importar axios
import Spiral from '../Spiral/Spiral';

export default function CardsX() {
    const [ejercicios, setEjercicios] = useState([]); // Estado para almacenar los ejercicios
    const [showSpiral, setShowSpiral] = useState(true);

    useEffect(() => {
        // Realizar la petición a la ruta localhost/ejercicios
        axios.get('https://fitness-ue8o.onrender.com/ejercicios')
            .then(response => {
                setTimeout(() => {
                    const limit = response.data.ejercicios.slice(0, 2)
                    setEjercicios(limit); // Actualizar el estado con los datos obtenidos
                    setShowSpiral(false); // Ocultar el componente Spiral después de 2 segundos
                }, 2000);
            })
            .catch(error => {
                console.error('Error al obtener los ejercicios:', error);
            });
    }, []);

    return (
        <div className='contain-scroll'>
            {showSpiral && <Spiral />} {/* Mostrar el componente Spiral mientras se cargan los datos */}
            {!showSpiral && (
                <Swiper effect={'coverflow'} grabCursor={true} loop={true} slidesPerView={'auto'} coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, }} pagination={{ el: '.swiper-pagination', clickable: true }} navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true, }} onSwiper={(swiper) => console.log(swiper)} id="swiper_container">
                    <Swiper>
                        {ejercicios.map((ejercicio) => (
                            <SwiperSlide key={ejercicio.id} id='SwiperSlide'>
                                <div className='cardsX'>
                                    <Link to={`/ejercicios/${ejercicio._id}`}>
                                        <img src={ejercicio.img} alt={ejercicio.ejercicio} />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Swiper>
            )}
        </div>
    )
}
