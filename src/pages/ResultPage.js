import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import config from "../config.json";

import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    min-width: 350px;
    .content {
        height: 45vh;
        width: 700px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .btn-container {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-top: 80px;
        @media (max-width: 600px) {
            width: 85%;
            margin-top: 50px;
        }
    }
    .city-name {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 16px;
        font-size: 22px;
        @media (max-width: 600px) {
            width: 85%;
            font-size: 18px;
        }
    }
    .web-view {
        width: 100%;
        @media (max-width: 600px) {
            display: none;
        }
    }
    .mobile-view {
        display: none;
        @media (max-width: 600px) {
            width: 85%;
            display: block;
        }
    }
`

function ResultPage() {

    const [city, setCity] = useState("");

    const location = useLocation();

    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    }

    const forecastDate = (date) => {
        const forecastDate = new Date(date * 1000);
        const day = forecastDate.getDate();
        const month = forecastDate.getMonth() + 1;
        const year = forecastDate.getFullYear();
        return `${month}/${day}/${year}`;
    }

    useEffect(() => {
        fetch(`${config.weatherAPI}?q=${location.state.city}&units=imperial&APPID=${config.APIKey}`)
            .then(res => res.json())
            .then(data => setCity(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <StyledContainer>
            <div className='content'>
                <div className="city-name">{city.message ? `${city.message}: ${location.state.city}` : location.state.city}</div>
                <div className='web-view'>
                    <table>
                        <thead>
                            <tr>
                                <th>Date (mm/dd/yyyy)</th>
                                <th>Temp (F)</th>
                                <th>Description</th>
                                <th>Main</th>
                                <th>Pressure</th>
                                <th>Humidity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{forecastDate(city.dt)}</td>
                                <td>{city.main ? city.main.temp : '-'}</td>
                                <td>{city.weather ? city.weather[0].description : '-'}</td>
                                <td>{city.weather ? city.weather[0].main : '-'}</td>
                                <td>{city.main ? city.main.pressure : '-'}</td>
                                <td>{city.main ? city.main.humidity : '-'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='mobile-view'>
                    <table>
                        <thead>
                            <tr>
                                <th>Date (mm/dd/yyyy)</th>
                                <th>Temp (F)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{forecastDate(city.dt)}</td>
                                <td>{city.main ? city.main.temp : '-'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='btn-container'>
                    <button onClick={goBack}>Back</button>
                </div>
            </div>

        </StyledContainer>
    );
}

export default withAuthenticationRequired(ResultPage, {
    // Show a message while the user waits to be redirected to the login page.
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});