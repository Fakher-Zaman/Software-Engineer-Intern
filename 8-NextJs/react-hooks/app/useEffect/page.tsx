"use client";

import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(count * 2);
    }, [count]);

    return (
        <div className='flex flex-col justify-center items-center m-4'>
            <p>Count: {count}</p>
            <div>
                <button
                    onClick={() => setCount((c) => c + 1)}
                    className='m-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
                >
                    Add
                </button>
                <button
                    onClick={() => setCount((c) => c - 1)}
                    className='m-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
                >
                    Subtract
                </button>
            </div>
            <p>Calculation: {calculation}</p>
        </div>
    )
}

export default Counter;