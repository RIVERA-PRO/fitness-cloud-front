import React from 'react'
import Header from '../Pages/Header/Header'

import ButonScroll from '../Components/ButonScroll/ButonScroll'
import FooterPage from '../Pages/FooterPage/FooterPage'
import HeroPage from '../Pages/HeroPage/HeroPage'
import Hero1Page from '../Pages/Hero1Page/Hero1Page'
import PageCaracteristicas from '../Pages/PageCaracteristicas/PageCaracteristicas'
import Comentarios from '../Components/Comentarios/Comentarios'
import SrollPage from '../Pages/SrollPage/SrollPage'
import Spiral from '../Components/Spiral/Spiral'
export default function IndexLayout() {
    return (
        <div>
            <Header />
            <Hero1Page />

            <HeroPage />
            <SrollPage />

            <PageCaracteristicas />

            <Comentarios />
            <FooterPage />
            <ButonScroll />

        </div>
    )
}
