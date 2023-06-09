import React, { useState, useEffect } from 'react'
import './Navbar.css'

import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import InputSearch from '../InputSerach/InputSearchs'
import { FaHome } from 'react-icons/fa';
import LogIn from '../../Components/LogIn/LogIn'
import Register from '../../Components/Register/Register'
import { faUser, faHome, faShoppingCart, faSignOutAlt, faNewspaper, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import UserInfo from '../InfoUser/InfoUser';
import Logout from '../../Components/Logout/Logout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    let [modalUser, setModalUser] = useState(false);
    let [modalUserOption, setModalUserOption] = useState('login');
    const handleModalUser = () => {
        setModalUser(!modalUser);
    }; //Funcion renderiza Modal 'user'
    const handleModalUserOption = () => {
        setModalUserOption(modalUserOption === 'register' ? 'login' : 'register');
    };


    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
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

                <div className={`nav_items ${isOpen && "open"}`} >

                    <div className="cerrar-nav" onClick={() => setIsOpen(!isOpen)}>
                        x
                    </div>
                    <div className='logo-nav'>
                        <img src="../../../img/logo.png" alt="logo" />
                    </div>
                    <div className='enlaces'>
                        <Anchor to={`/`} >Inico</Anchor>
                        <Anchor to={`/abdominales`} >Abdominales</Anchor>
                        <Anchor to={`/biceps`} >Biceps</Anchor>
                        <Anchor to={`/gluteos`} >Gluteos</Anchor>
                        <Anchor to={`/pecho`} >Pecho</Anchor>
                        <Anchor to={`/triceps`} >Triceps</Anchor>
                    </div>


                </div>

                <div className='enlaces2'>
                    <Anchor to={`/`} > <FaHome className='icon' /> <span className='a'>Inicio</span></Anchor>
                    <Anchor to={`/ejercicios`} > <FaHome className='icon' /> <span className='a'>Ejercicios</span></Anchor>
                    {/* <Anchor to={`/abdominales`} >  <FaHome className='icon' /> <span className='a'>Abdominales</span></Anchor>
                    <Anchor to={`/biceps`} >  <FaHome className='icon' /> <span className='a'>Biceps</span></Anchor>
                    <Anchor to={`/gluteos`} >  <FaHome className='icon' /> <span className='a'>Gluteos</span></Anchor>
                    <Anchor to={`/pecho`} >  <FaHome className='icon' /> <span className='a'>Pecho</span></Anchor>
                    <Anchor to={`/triceps`} >  <FaHome className='icon' /> <span className='a'>Triceps</span></Anchor>
                    <Anchor to={`/Cardio`} >  <FaHome className='icon' /> <span className='a'>Cardio</span></Anchor>
                    <Anchor to={`/pesoCorporal`} >  <FaHome className='icon' /> <span className='a'>Peso Corporal</span></Anchor>
                    <Anchor to={`/hombro`} >  <FaHome className='icon' /> <span className='a'>Hombro</span></Anchor>
                    <Anchor to={`/yoga`} >  <FaHome className='icon' /> <span className='a'>Yoga</span></Anchor>
                    <Anchor to={`/cuadriceps`} >  <FaHome className='icon' /> <span className='a'>Cuadriceps</span></Anchor> */}
                    {userData ? (
                        <div className='userInfo-nav' onClick={handleModalUser} >
                            <div className='img-name'>
                                <img src={userData.photo} alt="User Avatar" />
                                <p>{userData.name} </p>
                            </div>
                            <p><Logout icon={faSignOutAlt} /></p>
                        </div>
                    ) : (
                        <div className='enlaces2' >
                            <Anchor to={`/register`} > <FontAwesomeIcon icon={faUser} className='icon' /> <span className='a'> Ingresar</span></Anchor>
                        </div>
                    )}
                </div>

                {modalUser && (
                    <div className="modal_content">
                        <div className="modal-nav">
                            <div className="cerrar-modal" onClick={handleModalUser}>x</div>
                            <p>adasd</p>
                            <UserInfo />


                        </div>
                    </div>
                )}

                <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>





            </nav>


        </header>
    );
}
