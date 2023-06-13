import React, { useState, useEffect } from 'react';
import { useParams, Link as Anchor } from "react-router-dom";
import axios from 'axios';
import './Detail.css';
import tilde from '../../../src/images/tlde.png';
import mancuerna from '../../../src/images/service-icon-2.png';


export default function Detail() {
    const { id } = useParams();
    const [ejercicio, setEjercicio] = useState(null);

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
                <button onClick={dia1}>Guardar en localStorage</button>
                <div>
                    <h2 className="titulo-detail">{ejercicio.title}</h2>
                    <div className="mancuerna">
                        <Anchor to={`/${ejercicio.categoria}`} className='btn-1' id="btn-1">
                            {ejercicio.categoria}
                        </Anchor>
                    </div>
                </div>
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






