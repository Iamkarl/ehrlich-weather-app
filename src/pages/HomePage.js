import React, { useState } from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import search from '../assets/icons/search-icon.png'

import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    min-width: 350px;
    .content {
        height: 45vh;
        width: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .search-btn-container {
        display: flex;
        justify-content: center;
    }
    .search-form {
        width: 300px;
        align-self: center;
        border: none;
        margin-top: 40px;
    }
    .search-input-container {
        width: 300px;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        margin: 35px 0px 10px 0px;
        position: relative;
        .search-input {
            height: 34px;
            margin-top: 4px;
            border: 1px solid #979797;
            border-radius: 4px;
            padding: 2px 12px 2px 32px;
        }
        .search-icon {
            width: 14px;
            height: 14px;
            position: relative;
            top: 28px;
            left: 10px;
        }
        @media (max-width: 600px) {
            width: auto;
            min-width: 275px
        }
    }
    .name, .github-link {
        width: auto;
        max-width: 600px;
        margin-bottom: 14px;
        font-size: 18px;
        @media (max-width: 600px) {
            margin-bottom: 12px;
            font-size: 16px;
        }
    }
`

function HomePage() {
    const [city, setCity] = useState('');

    const { user } = useAuth0();

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate('/result', { state: { city } });
    }

    return (
        <StyledContainer>
            <div className='content'>
                <p className='name'>{user.name}</p>
                <p className='github-link'>https://github.com/{user.nickname}</p>
                <div className='search-input-container'>
                    <img src={search} alt="Search" className='search-icon' />
                    <input type="search" value={city} onChange={(e) => setCity(e.target.value)} className="search-input" placeholder="City" />
                </div>
                <div className='search-btn-container'>
                    <button disabled={!city} onClick={handleSearch}>Display Weather</button>
                </div>
            </div>
        </StyledContainer>
    );
}

export default withAuthenticationRequired(HomePage, {
    // Show a message while the user waits to be redirected to the login page.
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});