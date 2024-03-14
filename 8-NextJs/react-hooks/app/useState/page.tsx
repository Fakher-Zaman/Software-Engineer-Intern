"use client";

import React, { useState } from 'react';

const Car = () => {
    const [car, setCar] = useState({
        make: 'Toyota',
        model: 'Corolla',
        year: 2020,
        color: 'black'
    });

    const updateColor = () => {
        setCar({ ...car, color: 'blue' });
    }

    return (
        <>
            <h1>My {car.make}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            <button
                type="button"
                onClick={updateColor}
            >
                Blue
            </button>
        </>
    )
}

export default Car;