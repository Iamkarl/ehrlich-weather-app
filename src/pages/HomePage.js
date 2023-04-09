import React, { useState } from 'react';
import '../styles/homePage.css'
import search from '../assets/icons/search-icon.png'

function HomePage() {
    const [city, setCity] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        // Perform login logic here
    }

    return (
        <div className='container'>
            <div className='content'>
                <p className='name'>John Smith</p>
                <p className='github-link'>https://github.com/smithjohn</p>
                <form className='search-form' onSubmit={handleSearch}>
                    <div className='search-input-container'>
                        <img src={search} alt="Search" className='search-icon' />
                        <input type="search" value={city} onChange={(e) => setCity(e.target.value)} className="search-input" placeholder="City" />
                    </div>
                    <div className='btn-container'>
                        <button type="submit">Display Weather</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default HomePage;