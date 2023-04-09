import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    min-width: 350px;
    .login-content {
        height: 50vh;
        width: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .btn {
        align-self: flex-start;
        @media (max-width: 600px) {
            margin: 0px 25px;
        }
    }
    p {
        width: auto;
        max-width: 600px;
        margin-bottom: 40px;
        font-size: 18px;
        @media (max-width: 600px) {
            font-size: 16px;
            padding: 0px 25px;
        }
    }
    `

function LoginPage() {

    const { isAuthenticated, loginWithRedirect } = useAuth0();

    if (isAuthenticated) {
        window.location.href = 'http://localhost:3000/';
    }

    return (
        <StyledContainer>
            <div className='login-content'>
                <p>Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city.</p>
                <button className="btn" onClick={loginWithRedirect}>Login</button>
            </div>
        </StyledContainer>
    );
}

export default LoginPage;