import React, { useState } from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import '../styles/homePage.css'
import search from '../assets/icons/search-icon.png'

function HomePage() {
    const [city, setCity] = useState('');

    const { user } = useAuth0();

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate('/result', { state: { city } });
    }

    return (
        <div className='container'>
            <div className='content'>
                <p className='name'>{user.name}</p>
                <p className='github-link'>https://github.com/{user.nickname}</p>
                <div className='search-input-container'>
                    <img src={search} alt="Search" className='search-icon' />
                    <input type="search" value={city} onChange={(e) => setCity(e.target.value)} className="search-input" placeholder="City" />
                </div>
                <div className='search-btn-container'>
                    <button onClick={handleSearch}>Display Weather</button>
                </div>
            </div>

        </div>
    );
}

export default withAuthenticationRequired(HomePage, {
    // Show a message while the user waits to be redirected to the login page.
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});