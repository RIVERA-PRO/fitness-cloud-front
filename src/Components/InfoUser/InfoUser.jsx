import React, { useState, useEffect } from 'react'
import './infoUser.css'
import Logout from '../Logout/Logout'
import { Link as Anchor } from "react-router-dom";
function ProfilePage({ handleLogout }) {
  const [userData, setUserData] = useState(null);

  const updateUserData = () => {
    const user = localStorage.getItem('user');
    if (user) {
      setUserData(JSON.parse(user));
    }
  };

  // Llamar a la función updateUserData cuando el componente se monte
  useEffect(() => {
    updateUserData();
  }, []);



  // Actualizar el estado de userData cuando el usuario inicie sesión
  const handleLogin = () => {
    updateUserData();
  };

  return (
    <div className='userInfoContainer'>

    </div>
  );
}

export default ProfilePage;