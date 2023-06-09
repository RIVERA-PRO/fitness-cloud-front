import React from 'react'
import './Hero1.css'
import { Link as Anchor } from "react-router-dom";
import InputSearch from '../InputSerach/InputSearchs'
export default function Hero1() {
    return (
        <div className='Hero1-contain'>
            <div className='text-hero1'>
                <h6>ELEMENTOS DE APTITUD</h6>
                <h1>DA FORMA A TU
                    CUERPO IDEAL</h1>
                <p>Aquí te ayudaremos a moldear y construir tu cuerpo ideal y vivir tu vida al máximo.</p>

                <Anchor onClick={() => { document.querySelector('#heroContain-id').scrollIntoView({ behavior: 'smooth' }); }} className='btn-1'>Empezar</Anchor>
                <InputSearch />
            </div>
        </div>

    )
}
