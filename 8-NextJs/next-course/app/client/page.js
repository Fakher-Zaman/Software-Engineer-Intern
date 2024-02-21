"use client"

import React from 'react';

const Client = () => {
    // console.log('Hello from the (client component)')
    return (
        <div>
            <button
                onClick={() => alert('Hello Client')}
                className='border bg-red-200 ml-5 my-10 px-2 py-4'
            >
                Click Me
            </button>
        </div>
    )
};

export default Client;