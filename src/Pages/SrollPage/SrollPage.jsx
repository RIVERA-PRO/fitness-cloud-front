import React from 'react'
import Espalda from '../../Components/Scrolled/Espalda'
import Abdominales from '../../Components/Scrolled/Abdominales'
import Pecho from '../../Components/Scrolled/Pecho'
import Biceps from '../../Components/Scrolled/Biceps'
import Triceps from '../../Components/Scrolled/Triceps'
import Cuadriceps from '../../Components/Scrolled/Cuadriceps'
import Yoga from '../../Components/Scrolled/Yoga'
import PesoCorporal from '../../Components/Scrolled/PesoCorporal'
import Gluteos from '../../Components/Scrolled/Gluteos'
import Hombro from '../../Components/Scrolled/Hombro'
import Cardio from '../../Components/Scrolled/Cardio'
export default function SrollPage() {
    return (
        <div>
            <Espalda />
            <Abdominales />
            <Pecho />
            <Biceps />
            <Triceps />
            <Cuadriceps />
            <Yoga />
            <PesoCorporal />
            <Gluteos />
            <Hombro />
            <Cardio />
        </div>
    )
}
