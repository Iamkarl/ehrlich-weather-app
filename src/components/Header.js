import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../assets/images/header-logo.png'

import styled from 'styled-components'



const StyledHeader = styled.header`
    width: auto;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 10px 30px;
    position: relative;
    min-width: 275px;
    h2 {
        @media (max-width: 600px) {
            display: ${(props) => props.loggedIn ? 'none' : 'block'};
            font-size: 26px;
        }
    }
    .logo {
        width: 100px;
        height: 100px;
        padding-right: 30px;
        @media (max-width: 600px) {
            width: 80px;
            height: 80px;
        }
    }
    .logout-btn {
        position: absolute;
        right: 100px;
        @media (max-width: 600px) {
            right: 40px;
        }
    }
`

function Header() {
    const { isAuthenticated, logout } = useAuth0();

    return (
        <StyledHeader loggedIn={isAuthenticated}>
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
        </StyledHeader>
    );
}

export default Header;