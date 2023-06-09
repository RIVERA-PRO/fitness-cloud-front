import React from 'react'
import './Footer.css'
import jrdev from '../../images/logor.png'
export default function Footer() {

    return (
        <div className='foter'>

            <div className='contact-footer'>
                <div>
                    <h5>Teléfono</h5>
                    <p>(123) 118 9999 - (123) 118 9999</p>
                </div>
                <div>
                    <h5>Direccion</h5>
                    <p>Salta, Argentina</p>
                </div>
                <div>
                    <h5>Correo electrónico</h5>
                    <p>contactcompany@Gutim.com</p>
                </div>
            </div>

            <div className='fondo-footer'>
                <div className='form-fondo'>
                    <div className='form-text'>
                        <h6>SUSCRÍBASE A NUESTRA LISTA DE CORREO</h6>
                        <p>Regístrese para recibir la información más reciente</p>
                    </div>
                    <form action="">
                        <input type="text" placeholder='Ingrese su email' />
                        <input type="submit" className='btn-2' />
                    </form>
                </div>
            </div>

            <div className='Copyright'>
                <p>Copyright © 2023 Todos los derechos reservados</p>
                <div class="redes-sociales">
                    <a href="#"><i class='fa fa-facebook'></i></a>
                    <a href="#"><i class='fa fa-instagram'></i></a>
                    <a href="#"> <i class='fa fa-linkedin'></i></a>
                    <a href="#"><i class='fa fa-twitter'></i></a>
                    <a href="#"> <i class='fa fa-whatsapp'></i></a>
                </div>
            </div>

            <div className='dev'>
                <p>Desarrollado por</p>
                <img src={jrdev} alt="Juan Rivera Developer" />
            </div>


        </div>
    )
}
