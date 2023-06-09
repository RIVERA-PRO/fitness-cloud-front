import React, { useState, useEffect } from 'react';
import './Hero.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import axios from 'axios'; // Importar axios

import CardsX from '../CardsX/CardsX';
import img from '../../images/tlde.png';
import Spiral from '../Spiral/Spiral';

export default function Hero() {
    const [ejercicios, setEjercicios] = useState([]); // Estado para almacenar los ejercicios
    const [showSpiral, setShowSpiral] = useState(true);

    useEffect(() => {
        // Realizar la petición a la ruta localhost/ejercicios
        axios.get('https://fitness-ue8o.onrender.com/ejercicios')
            .then(response => {
                setTimeout(() => {
                    setEjercicios(response.data.ejercicios); // Actualizar el estado con los datos obtenidos
                    setShowSpiral(false); // Ocultar el componente Spiral después de 2 segundos
                }, 2000);
            })
            .catch(error => {
                console.error('Error al obtener los ejercicios:', error);
            });
    }, []);

    const ejerciciosPorCategoria = ejercicios.reduce((categorias, ejercicio) => {
        if (!categorias[ejercicio.categoria]) {
            categorias[ejercicio.categoria] = ejercicio;
        }
        return categorias;
    }, {});

    const ejerciciosUnicos = Object.values(ejerciciosPorCategoria);

    return (
        <div className='heroContain' id='heroContain-id'>
            {showSpiral && <Spiral />} {/* Mostrar el componente Spiral mientras se cargan los datos */}
            {!showSpiral && (
                <>
                    <div className='title-img'>
                        <img src={img} alt="" />
                        <h2>Categorias</h2>
                    </div>
                    <Swiper effect={'coverflow'} grabCursor={true} loop={true} slidesPerView={'auto'} coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, }} pagination={{ el: '.swiper-pagination', clickable: true }} navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true, }} onSwiper={(swiper) => console.log(swiper)} className="swiper_container">
                        <Swiper>
                            {ejerciciosUnicos.map((ejercicio) => (
                                <SwiperSlide key={ejercicio.id}>
                                    <div>
                                        <Link to={`/${ejercicio.categoria}`}>
                                            <img src={ejercicio.fondo} alt="" />
                                            <p className='categoria-card'>{ejercicio.categoria}</p>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Swiper>
                    <div className='title-img'>
                        <img src={img} alt="" />
                        <h2>Ejercicios</h2>
                    </div>
                    <CardsX />
                </>
            )}
        </div>
    )
}
