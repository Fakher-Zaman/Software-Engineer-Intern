'use client';

import React, { useState } from 'react';
import Error from '@/app/error';
import { toast } from 'react-toastify';

const Page1 = () => {
    const [showError, setShowError] = useState(false);

    const toggleError = () => {
        setShowError(!showError);
        toast.error('An error occurred at Route5 Page!');
    };

    return (
        <div>
            {showError && <Error error={new Error("An error occurred")} reset={() => setShowError(false)} />}
            <h2 className="bg-red-300">Route5 Page</h2>
            <button onClick={toggleError} className='px-3 py-2 bg-red-200 m-2 rounded'>Toggle Error</button>
        </div>
    );
};

export default Page1;