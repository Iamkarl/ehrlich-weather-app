import React, { useState } from 'react';
import '../styles/loginPage.css'

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [viewForm, setViewForm] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        // Perform login logic here
    }

    const showLoginForm = () => {
        setViewForm(true);
    };

    return (
        <div className='container'>
            <div className='content'>
                <p>Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city.</p>
                {!viewForm && <button className="btn" onClick={showLoginForm}>Login</button>}
                {viewForm && <form onSubmit={handleLogin}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button type="submit">Login</button>
                </form>}
            </div>

        </div>
    );
}

export default LoginPage;