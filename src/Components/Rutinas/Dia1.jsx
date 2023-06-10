import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Countdown } from 'react-countdown';
export default function Dia1() {
    const [listaEjercicios, setListaEjercicios] = useState([]);

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


    return (
        <div>
            {listaEjercicios.length > 0 ? (
                <div>
                    {listaEjercicios.map(ejercicio => (
                        <div key={ejercicio.id}>
                            <h3>{ejercicio.title}</h3>
                            {/* Mostrar los demás datos del ejercicio */}
                            <button onClick={() => eliminarEjercicio(ejercicio._id)}>Eliminar</button>
                        </div>
                    ))}
                    <button onClick={eliminarTodosLosEjercicios}>Eliminar todos</button>
                </div>
            ) : (
                <div>
                    <p>No hay rutinas disponibles.</p>
                    <Link to="/ejercicios">Ir a la página de ejercicios</Link>
                </div>
            )}
        </div>
    );
}
