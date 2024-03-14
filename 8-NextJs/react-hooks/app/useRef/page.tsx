"use client";

import React, { useEffect, useRef, useState } from 'react';

const App = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const count = useRef<number>(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className='m-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
            />
            <h1>Render Count: {count.current}</h1>
        </>
    )
}

export default App;