"use client";

import React, { useState } from 'react';

const Car = () => {
    const [car, setCar] = useState({
        make: 'Toyota',
        model: 'Corolla',
        year: 2020,
        color: 'black'
    });
    return (
        <div className='flex flex-col justify-center items-center m-4'>
            <h1>My {car.make}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            <button
                type="button"
                onClick={() => setCar({ ...car, color: 'blue' })}
                className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
            >
                Blue
            </button>
            <button
                type="button"
                onClick={() => setCar({ ...car, color: 'yellow' })}
                className='mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
            >
                Yellow
            </button>
            <button
                type="button"
                onClick={() => setCar({ ...car, color: 'green' })}
                className='mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
            >
                Green
            </button>
        </div>
    )
}

export default Car;