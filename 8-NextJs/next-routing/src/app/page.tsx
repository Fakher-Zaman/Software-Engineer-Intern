'use client';

import React, { useState } from 'react';
import Error from './error';
import { toast } from 'react-toastify';

const Page1 = () => {
  const [showError, setShowError] = useState(false);

  const toggleError = () => {
    setShowError(!showError);
    toast.error('An error occurred at Home Page!');
  };

  return (
    <div>
      {showError && <Error error={new Error("An error occurred")} reset={() => setShowError(false)} />}
      <h2 className="bg-yellow-300">Home Page</h2>
      <button onClick={toggleError} className='px-3 py-2 bg-yellow-200 m-2 rounded'>Toggle Error</button>
    </div>
  );
};

export default Page1;