import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import './Rutinas.css'
import tilde from '../../../src/images/tlde.png';
import imagen from '../../images/1.jpg'
export default function Dia1() {
    const [listaEjercicios, setListaEjercicios] = useState([]);
    const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState(null);

    useEffect(() => {
        const rutinaDia1 = localStorage.getItem('rutinaDia1');
        const ejercicios = rutinaDia1 ? JSON.parse(rutinaDia1) : [];
        setListaEjercicios(ejercicios);
    }, []);

    const eliminarEjercicio = (_id) => {
        const nuevaLista = listaEjercicios.filter(ejercicio => ejercicio._id !== _id);
        setListaEjercicios(nuevaLista);
        localStorage.setItem('rutinaDia1', JSON.stringify(nuevaLista));
    };

    const eliminarTodosLosEjercicios = () => {
        setListaEjercicios([]);
        localStorage.removeItem('rutinaDia1');
    };

    const mostrarEjercicio = (ejercicio) => {
        setEjercicioSeleccionado(ejercicio);
    };

    return (

        <div className="container">
            <div className="ejercicios-lista">
                {listaEjercicios.length > 0 ? (
                    <div>
                        <button className='remover' onClick={eliminarTodosLosEjercicios}>Eliminar todos</button>
                        {listaEjercicios.map(ejercicio => (
                            <div key={ejercicio._id} className='card-lateral'>

                                <Link className='img' to={`/ejercicios/${ejercicio._id}`}><img src={ejercicio.img} alt="" /></Link>
                                <div className='card-lateral-text'>
                                    <button className='delete' onClick={() => eliminarEjercicio(ejercicio._id)}>X</button>
                                    <h4>{ejercicio.title.slice(0, 50)}..</h4>

                                    <button className='empezar' onClick={() => mostrarEjercicio(ejercicio)}>
                                        <FontAwesomeIcon icon={faSignOutAlt} /> Empezar
                                    </button>
                                </div>
                            </div>
                        ))}

                    </div>
                ) : (
                    <div>
                        <p>No hay rutinas disponibles.</p>
                        <Link to="/ejercicios">Ir a la página de ejercicios</Link>
                    </div>
                )}
            </div>
            <div className="ejercicio-seleccionado">
                {ejercicioSeleccionado ? (
                    <div className='selected'>
                        <button className='cerrar-ej' onClick={() => setEjercicioSeleccionado(null)}>X</button>
                        <img src={ejercicioSeleccionado.img} alt="" />


                        <div className='series-rep'>
                            <div className='series-rep-text'>
                                <label >Repet</label>
                                <input type="number" placeholder='1' />
                            </div>
                            <div className='series-rep-text'>
                                <label >Series</label>
                                <input type="number" placeholder='1' />
                            </div>
                        </div>
                        {ejercicioSeleccionado.paso1 !== "" && (
                            <div className="pasos">
                                <h4>¿Cómo hacer {ejercicioSeleccionado.title}?</h4>
                                <ul>
                                    <li><img src={tilde} alt="" className="tilde" /> {ejercicioSeleccionado.paso1}</li>
                                    {ejercicioSeleccionado.paso2 !== "" && <li> <img src={tilde} alt="" className="tilde" /> {ejercicioSeleccionado.paso2}</li>}
                                    {ejercicioSeleccionado.paso3 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicioSeleccionado.paso3}</li>}
                                    {ejercicioSeleccionado.paso4 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicioSeleccionado.paso4}</li>}
                                    {ejercicioSeleccionado.paso5 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicioSeleccionado.paso5}</li>}
                                    {ejercicioSeleccionado.paso6 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicioSeleccionado.paso6}</li>}
                                    {ejercicioSeleccionado.paso7 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicioSeleccionado.paso7}</li>}
                                    {ejercicioSeleccionado.paso8 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicioSeleccionado.paso8}</li>}
                                    {ejercicioSeleccionado.paso9 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicioSeleccionado.paso9}</li>}
                                    {ejercicioSeleccionado.paso10 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicioSeleccionado.paso10}</li>}
                                </ul>
                            </div>
                        )}




                    </div>
                ) : (
                    <div className='sinselected'>
                        <img className='img-fondos' src={imagen} alt="" />
                    </div>
                )}
            </div>
        </div>

    );
}
