import React from 'react';

export default function Dia7() {
    const rutinaDia1 = localStorage.getItem('rutinaDia7');
    const listaEjercicios = rutinaDia1 ? JSON.parse(rutinaDia1) : [];

    return (
        <div>
            {listaEjercicios.map(ejercicio => (
                <div key={ejercicio.id}>
                    <h3>{ejercicio.title}</h3>
                    {/* Mostrar los demás datos del ejercicio */}
                </div>
            ))}
        </div>
    );
}
