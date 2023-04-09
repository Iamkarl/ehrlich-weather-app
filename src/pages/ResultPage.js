import React, { useState } from 'react';
import '../styles/resultPage.css'

function ResultPage() {

    const goBack = (event) => {
        event.preventDefault();
        // Perform login logic here
    }

    return (
        <div className='container'>
            <div className='content'>
                <div className="city-name">Manila City</div>
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
                            <td>09/01/2022</td>
                            <td>75</td>
                            <td>Sky is clear</td>
                            <td>Clear</td>
                            <td>1023.67</td>
                            <td>100</td>
                        </tr>
                    </tbody>
                </table>
                <div className='btn-container'>
                    <button onClick={goBack}>Back</button>
                </div>
            </div>

        </div>
    );
}

export default ResultPage;