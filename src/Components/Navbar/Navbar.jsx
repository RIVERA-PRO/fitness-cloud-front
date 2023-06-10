import React, { useState, useEffect } from 'react'
import './Navbar.css'

import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import InputSearch from '../InputSerach/InputSearchs'
import { FaHome } from 'react-icons/fa';
import LogIn from '../../Components/LogIn/LogIn'
import Register from '../../Components/Register/Register'
import { faUser, faHome, faDumbbell, faSignOutAlt, faNewspaper, faCalendarCheck, faHeart, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import UserInfo from '../InfoUser/InfoUser';
import Logout from '../../Components/Logout/Logout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    let [modalUser, setModalUser] = useState(false);
    let [modalNav, setModalNav] = useState(false);
    let [modalUserOption, setModalUserOption] = useState('login');
    const handleModalUser = () => {
        setModalUser(!modalUser);
    };
    const handleModalNav = () => {
        setModalNav(!modalNav);
    };
    const handleModalUserOption = () => {
        setModalUserOption(modalUserOption === 'register' ? 'login' : 'register');
    };


    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const [userData, setUserData] = useState(null);

    const updateUserData = () => {
        const user = localStorage.getItem('user');
        if (user) {
            setUserData(JSON.parse(user));
        }
    };
    useEffect(() => {
        updateUserData();
    }, []);

    return (
        <header>
            <nav className={scrolled ? "navbar scrolled" : "navbar"}>

                <div className='logo'>
                    <Anchor to={`/`} > <img src="../../../img/icon.png" alt="logo" />Fitness Cloud</Anchor>

                </div>



                <div className='enlaces2'>
                    {userData ? (
                        <div className='userInfo-nav' onClick={handleModalUser}>
                            <div className='img-name'>
                                <img src={userData.photo} alt="User Avatar" />
                                <p>{userData.name} </p>
                            </div>

                        </div>
                    ) : (
                        <div className='userInfo-nav2' >
                            <Anchor to={`/register`} > <FontAwesomeIcon icon={faUser} className='icon' /> <span className='a'> Ingresar</span></Anchor>
                        </div>
                    )}
                    <Anchor to={`/`} > <FaHome className='icon' /> <span className='a'>Inicio</span></Anchor>
                    <Anchor to={`/ejercicios`} > <FontAwesomeIcon icon={faDumbbell} className='icon' />   <span className='a'>Ejercicios</span></Anchor>
                    <Anchor to={`/favoritos`} id='icon-none'>  <FontAwesomeIcon icon={faHeart} className='icon' /> <span className='a'>Favoritos</span></Anchor>


                    <a onClick={toggleMenu} id='icon-none'>
                        <FontAwesomeIcon icon={faNewspaper} className='icon' />
                        <span className='a'>Categorias</span>
                    </a>
                    <a onClick={handleModalUser} className='icon-flex-none'><FontAwesomeIcon icon={faSearch} className="icon" /></a>
                    <a onClick={handleModalNav} className='icon-flex-none'> <FontAwesomeIcon icon={faBars} className="icon" /></a>

                    {menuVisible && (
                        <p className='menu-items' >
                            <p onClick={toggleMenu} className="cerrar"><span>X </span>Ocultar  </p>
                            <Anchor to={`/abdominales`} >   <FontAwesomeIcon icon={faDumbbell} className='icon' />   <span className='a'>Abdominales</span></Anchor>
                            <Anchor to={`/biceps`} >   <FontAwesomeIcon icon={faDumbbell} className='icon' />  <span className='a'>Biceps</span></Anchor>
                            <Anchor to={`/gluteos`} >  <FontAwesomeIcon icon={faDumbbell} className='icon' />   <span className='a'>Gluteos</span></Anchor>
                            <Anchor to={`/pecho`} >   <FontAwesomeIcon icon={faDumbbell} className='icon' />  <span className='a'>Pecho</span></Anchor>
                            <Anchor to={`/triceps`} >  <FontAwesomeIcon icon={faDumbbell} className='icon' />  <span className='a'>Triceps</span></Anchor>
                            <Anchor to={`/Cardio`} >   <FontAwesomeIcon icon={faDumbbell} className='icon' />   <span className='a'>Cardio</span></Anchor>
                            <Anchor to={`/pesoCorporal`} >   <FontAwesomeIcon icon={faDumbbell} className='icon' />   <span className='a'>Peso Corporal</span></Anchor>
                            <Anchor to={`/hombro`} >   <FontAwesomeIcon icon={faDumbbell} className='icon' />  <span className='a'>Hombro</span></Anchor>
                            <Anchor to={`/yoga`} >   <FontAwesomeIcon icon={faDumbbell} className='icon' />   <span className='a'>Yoga</span></Anchor>
                            <Anchor to={`/cuadriceps`} >   <FontAwesomeIcon icon={faDumbbell} className='icon' />   <span className='a'>Cuadriceps</span></Anchor>
                        </p>
                    )}

                    {userData ? (
                        <div className='userInfo-nav' onClick={handleModalUser}>

                            <p className='logout'><Logout icon={faSignOutAlt} /></p>
                        </div>
                    ) : (
                        <div className='enlaces2' >

                        </div>
                    )}
                </div>


                {modalUser && (
                    <div className="modal_content">
                        <div className="modal-nav">
                            <div className="cerrar-modal" onClick={handleModalUser}>x</div>
                            <InputSearch />
                        </div>
                    </div>
                )}

                {modalNav && (
                    <div className="modal_content">
                        <div className="modal-nav">
                            <div className="cerrar-modal" onClick={handleModalNav}>x</div>
                            <div className='enlaces'>

                                <Anchor to={`/favoritos`} >  <FontAwesomeIcon icon={faHeart} className='icon' /> <span className='a'>Favoritos</span></Anchor>
                                <Anchor to={`/rutinas`} >  <FontAwesomeIcon icon={faHeart} className='icon' /> <span className='a'>Rutina</span></Anchor>

                                <Anchor to={`/abdominales`} >   <FontAwesomeIcon icon={faDumbbell} className='icon' />   <span className='a'>Abdominales</span></Anchor>
                                <Anchor to={`/biceps`} >   <FontAwesomeIcon icon={faDumbbell} className='icon' />  <span className='a'>Biceps</span></Anchor>
                                <Anchor to={`/gluteos`} >  <FontAwesomeIcon icon={faDumbbell} className='icon' />   <span className='a'>Gluteos</span></Anchor>
                                <Anchor to={`/pecho`} >   <FontAwesomeIcon icon={faDumbbell} className='icon' />  <span className='a'>Pecho</span></Anchor>
                                <Anchor to={`/triceps`} >  <FontAwesomeIcon icon={faDumbbell} className='icon' />  <span className='a'>Triceps</span></Anchor>
                                <Anchor to={`/Cardio`} >   <FontAwesomeIcon icon={faDumbbell} className='icon' />   <span className='a'>Cardio</span></Anchor>
                                <Anchor to={`/pesoCorporal`} >   <FontAwesomeIcon icon={faDumbbell} className='icon' />   <span className='a'>Peso Corporal</span></Anchor>
                                <Anchor to={`/hombro`} >   <FontAwesomeIcon icon={faDumbbell} className='icon' />  <span className='a'>Hombro</span></Anchor>
                                <Anchor to={`/yoga`} >   <FontAwesomeIcon icon={faDumbbell} className='icon' />   <span className='a'>Yoga</span></Anchor>
                                <Anchor to={`/cuadriceps`} >   <FontAwesomeIcon icon={faDumbbell} className='icon' />   <span className='a'>Cuadriceps</span></Anchor>

                                {userData ? (
                                    <div className='userInfo-nav' onClick={handleModalUser}>

                                        <p ><Logout icon={faSignOutAlt} /></p>
                                    </div>
                                ) : (
                                    <div className='enlaces2' >
                                        <Anchor to={`/register`} > <FontAwesomeIcon icon={faUser} className='icon' /> <span className='a'> Ingresar</span></Anchor>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                )}







            </nav>


        </header >
    );
}
