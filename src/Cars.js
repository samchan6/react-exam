import React, { useState } from 'react';

function Cars() {
    const [cars, setCars] = useState([
        {model: 'Ford'},
        {model: 'BMW'},
        {model: 'Audi'},
    ]);

    const listStyle = {
        paddingLeft: '15px',
    }
    
    return (
        <div>
            <h1>Who lives in my garage?</h1>
            <ul style={listStyle}>
                {cars.map((car, index) => (
                    <li key={index}>I am {car.model}</li>
                ))}
            </ul>
        </div>

    )
}

export default Cars;