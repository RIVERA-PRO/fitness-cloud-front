import React from 'react'
import './Caracteristicas.css'
import service from '../../../src/images/service-pic.jpg'
import service1 from '../../../src/images/service-icon-1.png'
import service2 from '../../../src/images/service-icon-2.png'
import service3 from '../../../src/images/service-icon-3.png'
import service4 from '../../../src/images/service-icon-4.png'
export default function Caracteristicas() {
    return (
        <div className='Caracteristicas-contain'>

            <div className='img-service'>
                <img src={service} alt="service" />
            </div>
            <div className='caracteristicas'>
                <div className='caracteristicas-int'>
                    <img src={service1} alt="service1" />
                    <h5>Estrategia</h5>
                    <p>Para lograr tus objetivos de fitness, es importante establecer estrategias claras y alcanzables.</p>
                </div>
                <div className='caracteristicas-int'>
                    <img src={service2} alt="service2" />
                    <h5>Yoga</h5>
                    <p>Incorporar sesiones de yoga en tu rutina de ejercicios puede ayudarte a mejorar la flexibilidad y reducir el estrés.</p>
                </div>
                <div className='caracteristicas-int'>
                    <img src={service3} alt="service3" />
                    <h5>Ejercicio</h5>
                    <p>Para obtener los mejores resultados en el gym, asegúrate de variar tus ejercicios y ajustar tu plan de entrenamiento en función de tus necesidades y metas.</p>
                </div>
                <div className='caracteristicas-int'>
                    <img src={service4} alt="service4" />
                    <h5>Perdida de peso</h5>
                    <p>La pérdida de peso no es solo una cuestión de hacer ejercicio, sino también de llevar una dieta saludable y equilibrada.</p>
                </div>

            </div>

        </div>
    )
}
