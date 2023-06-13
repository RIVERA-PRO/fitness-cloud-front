import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faHeart, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Scrolled.css';
import axios from 'axios';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Spiral from '../Spiral/Spiral';
import 'swiper/swiper-bundle.css';
import img from '../../images/tlde.png';
SwiperCore.use([Navigation, Pagination]);

export default function Triceps() {
    const [ejerciciosScroll, setEjerciciosScroll] = useState([]);
    const [showSpiral, setShowSpiral] = useState(true);

    const swiperRef = useRef(null);

    useEffect(() => {
        axios
            .get('https://fitness-ue8o.onrender.com/ejercicios')
            .then((response) => {
                const ejercicios = response.data.ejercicios;
                const ejerciciosFiltrados = ejercicios.filter(
                    (ejercicio) => ejercicio.categoria === 'Triceps'
                );
                setEjerciciosScroll(ejerciciosFiltrados);
                setTimeout(() => {
                    setShowSpiral(false);
                }, 2000); // Mostrar el contenido después de 2 segundos
            })
            .catch((error) => {
                console.error('Error al obtener los ejercicios:', error);
            });
    }, []);

    const handleNext = () => {
        swiperRef.current.slideNext();
    };

    const handlePrev = () => {
        swiperRef.current.slidePrev();
    };

    return (
        <div className='contain-s'>
            {showSpiral && <Spiral />}
            {!showSpiral && (
                <>
                    <div className='title-img'>
                        <div className='img-title'>
                            <img src={img} alt="" />
                            <h2>{ejerciciosScroll.length > 0 ? ejerciciosScroll[0].categoria : ''}</h2>
                        </div>
                        <Link to={`/${ejerciciosScroll.length > 0 ? ejerciciosScroll[0].categoria : ''}`}>
                            Ver más
                        </Link>
                    </div>
                    <div className='scroll-contain'>

                        <button className='next-prev-btn' onClick={handlePrev}><FontAwesomeIcon icon={faChevronLeft} /></button>

                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            loop={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
                            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                            onSwiper={(swiper) => {
                                console.log(swiper);
                                swiperRef.current = swiper;
                            }}
                            id="swiper_container_scroll"
                        >
                            {ejerciciosScroll.map((ejercicio) => {

                                return (
                                    <SwiperSlide key={ejercicio.id} id='SwiperSlide-scroll'>
                                        <div key={ejercicio._id} className="card-scroll">
                                            <img src={ejercicio.img} alt={ejercicio.ejercicio} />
                                            <div className="card-scroll-text">
                                                <h4>{ejercicio.title.slice(0, 20)}...</h4>
                                                <p>{ejercicio.description.slice(0, 40)}..</p>
                                                <div className='dis-flex'>
                                                    <Link to={`/ejercicios/${ejercicio._id}`}>
                                                        Ver más <FontAwesomeIcon icon={faSignOutAlt} />
                                                    </Link>
                                                    <h6>{new Date(ejercicio.createdAt).toLocaleString()}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                        <button className='next-prev-btn' onClick={handleNext}><FontAwesomeIcon icon={faChevronRight} /></button>
                    </div>
                </>
            )}

        </div>
    );
}    