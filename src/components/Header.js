import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../assets/images/header-logo.png'
import '../styles/header.css'


function Header() {
    const { isAuthenticated, logout } = useAuth0();

    return (
        <header>
            <img src={logo} alt="Logo" className='logo' />
            <h2>Weather Forecast</h2>
            {isAuthenticated && <button className='logout-btn' onClick={() => {
                logout({
                    logoutParams: {
                        returnTo: window.location.origin
                    }
                });
            }}>Logout</button>
            }
        </header>
    );
}

export default Header;