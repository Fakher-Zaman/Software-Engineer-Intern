"use client";

import React, { useEffect, useRef, useState } from 'react';

const App = () => {
    const inputElement = useRef<HTMLInputElement>(null);

    const focusInput = () => {
        inputElement.current!.focus();
    };

    return (
        <div className='flex flex-col justify-center items-center m-4'>
            <input type="text" ref={inputElement} className='my-4' />
            <button onClick={focusInput} className='px-3 py-1 bg-slate-300'>Focus Input</button>
        </div>
    );
}

export default App;