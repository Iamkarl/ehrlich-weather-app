import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/loginPage.css'

function LoginPage() {

    const { isAuthenticated, loginWithRedirect } = useAuth0();

    if(isAuthenticated) {
        window.location.href = 'http://localhost:3000/';
    }

    return (
        <div className='container'>
            <div className='content'>
                <p>Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city.</p>
                <button className="btn" onClick={loginWithRedirect}>Login</button>
            </div>

        </div>
    );
}

export default LoginPage;