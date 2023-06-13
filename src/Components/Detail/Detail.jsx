import React, { useState, useEffect } from 'react';
import { useParams, Link as Anchor } from "react-router-dom";
import axios from 'axios';
import './Detail.css';
import tilde from '../../../src/images/tlde.png';
import mancuerna from '../../../src/images/service-icon-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Detail() {
    const { id } = useParams();
    const [ejercicio, setEjercicio] = useState(null);
    const [coloresFavoritos, setColoresFavoritos] = useState({});
    const [favoritos, setFavoritos] = useState([]);

    let [modalUser, setModalUser] = useState(false);
    const handleModalUser = () => {
        setModalUser(!modalUser);
    };
    useEffect(() => {
        axios.get(`https://fitness-ue8o.onrender.com/ejercicios/${id}`)
            .then(response => {
                setEjercicio(response.data.ejercicio);
            })
            .catch(error => {
                console.error('Error al obtener el ejercicio:', error);
            });
    }, [id]);

    const dia1 = () => {
        if (ejercicio) {
            const ejerciciosGuardados = localStorage.getItem('rutinaDia1');
            let listaEjercicios = [];
            if (ejerciciosGuardados) {
                listaEjercicios = JSON.parse(ejerciciosGuardados);
            }
            // Verificar si el ejercicio ya existe en la lista
            const ejercicioExistente = listaEjercicios.find(
                ej => ej._id === ejercicio._id
            );
            if (!ejercicioExistente) {
                listaEjercicios.push(ejercicio);
                localStorage.setItem('rutinaDia1', JSON.stringify(listaEjercicios));
                console.log('Ejercicio agregado');
            } else {
                console.log('El ejercicio ya existe en la lista');
            }
        }
    };

    const dia2 = () => {
        if (ejercicio) {
            const ejerciciosGuardados = localStorage.getItem('rutinaDia2');
            let listaEjercicios = [];
            if (ejerciciosGuardados) {
                listaEjercicios = JSON.parse(ejerciciosGuardados);
            }
            // Verificar si el ejercicio ya existe en la lista
            const ejercicioExistente = listaEjercicios.find(
                ej => ej._id === ejercicio._id
            );
            if (!ejercicioExistente) {
                listaEjercicios.push(ejercicio);
                localStorage.setItem('rutinaDia2', JSON.stringify(listaEjercicios));
                console.log('Ejercicio agregado');
            } else {
                console.log('El ejercicio ya existe en la lista');
            }
        }
    };
    const dia3 = () => {
        if (ejercicio) {
            const ejerciciosGuardados = localStorage.getItem('rutinaDia3');
            let listaEjercicios = [];
            if (ejerciciosGuardados) {
                listaEjercicios = JSON.parse(ejerciciosGuardados);
            }
            // Verificar si el ejercicio ya existe en la lista
            const ejercicioExistente = listaEjercicios.find(
                ej => ej._id === ejercicio._id
            );
            if (!ejercicioExistente) {
                listaEjercicios.push(ejercicio);
                localStorage.setItem('rutinaDia3', JSON.stringify(listaEjercicios));
                console.log('Ejercicio agregado');
            } else {
                console.log('El ejercicio ya existe en la lista');
            }
        }
    };

    const dia4 = () => {
        if (ejercicio) {
            const ejerciciosGuardados = localStorage.getItem('rutinaDia4');
            let listaEjercicios = [];
            if (ejerciciosGuardados) {
                listaEjercicios = JSON.parse(ejerciciosGuardados);
            }
            // Verificar si el ejercicio ya existe en la lista
            const ejercicioExistente = listaEjercicios.find(
                ej => ej._id === ejercicio._id
            );
            if (!ejercicioExistente) {
                listaEjercicios.push(ejercicio);
                localStorage.setItem('rutinaDia4', JSON.stringify(listaEjercicios));
                console.log('Ejercicio agregado');
            } else {
                console.log('El ejercicio ya existe en la lista');
            }
        }
    };
    const dia5 = () => {
        if (ejercicio) {
            const ejerciciosGuardados = localStorage.getItem('rutinaDia5');
            let listaEjercicios = [];
            if (ejerciciosGuardados) {
                listaEjercicios = JSON.parse(ejerciciosGuardados);
            }
            // Verificar si el ejercicio ya existe en la lista
            const ejercicioExistente = listaEjercicios.find(
                ej => ej._id === ejercicio._id
            );
            if (!ejercicioExistente) {
                listaEjercicios.push(ejercicio);
                localStorage.setItem('rutinaDia5', JSON.stringify(listaEjercicios));
                console.log('Ejercicio agregado');
            } else {
                console.log('El ejercicio ya existe en la lista');
            }
        }
    };

    const dia6 = () => {
        if (ejercicio) {
            const ejerciciosGuardados = localStorage.getItem('rutinaDia6');
            let listaEjercicios = [];
            if (ejerciciosGuardados) {
                listaEjercicios = JSON.parse(ejerciciosGuardados);
            }
            // Verificar si el ejercicio ya existe en la lista
            const ejercicioExistente = listaEjercicios.find(
                ej => ej._id === ejercicio._id
            );
            if (!ejercicioExistente) {
                listaEjercicios.push(ejercicio);
                localStorage.setItem('rutinaDia6', JSON.stringify(listaEjercicios));
                console.log('Ejercicio agregado');
            } else {
                console.log('El ejercicio ya existe en la lista');
            }
        }
    };

    const dia7 = () => {
        if (ejercicio) {
            const ejerciciosGuardados = localStorage.getItem('rutinaDia7');
            let listaEjercicios = [];
            if (ejerciciosGuardados) {
                listaEjercicios = JSON.parse(ejerciciosGuardados);
            }
            // Verificar si el ejercicio ya existe en la lista
            const ejercicioExistente = listaEjercicios.find(
                ej => ej._id === ejercicio._id
            );
            if (!ejercicioExistente) {
                listaEjercicios.push(ejercicio);
                localStorage.setItem('rutinaDia7', JSON.stringify(listaEjercicios));
                console.log('Ejercicio agregado');
            } else {
                console.log('El ejercicio ya existe en la lista');
            }
        }
    };
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
    const esFavorito = favoritos.some((fav) => fav?._id === ejercicio?._id);
    console.log(esFavorito)
    const colorFavorito = coloresFavoritos[ejercicio?._id] || '';
    console.log(colorFavorito)
    if (!ejercicio) {

        return <div>Cargando...</div>;
    }

    return (
        <div className="detail-contain">
            <div id="img-fondo" >
                <img src={ejercicio.fondo} alt="" />
            </div>
            <div className="detail-bg">
                <div className="mancuerna" >
                    <img src={mancuerna} alt="" />
                </div>
                <div>
                    <h2 className="titulo-detail">{ejercicio.title}</h2>

                </div>
                <div className='btns-añadir'>
                    <button className='añadir' onClick={handleModalUser} > Rutina <FontAwesomeIcon icon={faDumbbell} /></button>


                    <Anchor to={`/${ejercicio.categoria}`} className='añadir' >
                        {ejercicio.categoria}
                    </Anchor>

                    <button className='añadir' onClick={() => toggleFavorito(ejercicio)}>
                        Favorito
                        <button
                            id={`favoritoButton_${ejercicio._id}`}
                            className={`favorito-button2 ${esFavorito ? 'favorito-active' : ''}`}
                            style={{ color: colorFavorito }}

                        >
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </button>

                </div>

                {modalUser && (
                    <div className="modalCont">
                        <div className="submodalCont">
                            <div className="cerrar-modal-Cont" onClick={handleModalUser}>x</div>
                            <div className='btns-rutinas'>
                                <button onClick={dia1}><span>Dia 1 </span> <FontAwesomeIcon icon={faDumbbell} /></button>
                                <button onClick={dia2}><span>Dia 2 </span> <FontAwesomeIcon icon={faDumbbell} /></button>
                                <button onClick={dia3}><span>Dia 3</span>  <FontAwesomeIcon icon={faDumbbell} /></button>
                                <button onClick={dia4}><span>Dia 4 </span> <FontAwesomeIcon icon={faDumbbell} /></button>
                                <button onClick={dia5}><span>Dia 5 </span> <FontAwesomeIcon icon={faDumbbell} /></button>
                                <button onClick={dia6}><span>Dia 6 </span> <FontAwesomeIcon icon={faDumbbell} /></button>
                                <button onClick={dia7}><span>Dia 6 </span> <FontAwesomeIcon icon={faDumbbell} /></button>
                            </div>

                        </div>
                    </div>
                )}


                <div className="img-descripcion">
                    <p>{ejercicio.description}</p>
                    <img src={ejercicio.img} alt={ejercicio.ejercicio} className="ejercicio-img" />
                </div>
                {ejercicio.paso1 !== "" && (
                    <div className="pasos">
                        <h4>¿Cómo hacer {ejercicio.title}?</h4>

                        <ul>
                            <li><img src={tilde} alt="" className="tilde" /> {ejercicio.paso1}</li>
                            {ejercicio.paso2 !== "" && <li> <img src={tilde} alt="" className="tilde" /> {ejercicio.paso2}</li>}
                            {ejercicio.paso3 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.paso3}</li>}
                            {ejercicio.paso4 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.paso4}</li>}
                            {ejercicio.paso5 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.paso5}</li>}
                            {ejercicio.paso6 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.paso6}</li>}
                            {ejercicio.paso7 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.paso7}</li>}
                            {ejercicio.paso8 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.paso8}</li>}
                            {ejercicio.paso9 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.paso9}</li>}
                            {ejercicio.paso10 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.paso10}</li>}
                        </ul>
                    </div>
                )}


                {ejercicio.consejo1 !== "" && (
                    <div className="consejos">
                        <h4>Consejos de entrenamiento con {ejercicio.title}</h4>
                        <ul>
                            <li><img src={tilde} alt="" className="tilde" /> {ejercicio.consejo1}</li>
                            {ejercicio.consejo2 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.consejo2}</li>}
                            {ejercicio.consejo3 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.consejo3}</li>}
                            {ejercicio.consejo4 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.consejo4}</li>}
                            {ejercicio.consejo5 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.consejo5}</li>}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}






