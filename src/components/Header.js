import React from 'react';
import logo from '../assets/images/header-logo.png'
import '../styles/header.css'

function Header() {
    return (
        <header>
            <img src={logo} alt="Logo" className='logo' />
            <h2>Weather Forecast</h2>
            <button className='logout-btn'>Logout</button>
        </header>
    );
}

export default Header;