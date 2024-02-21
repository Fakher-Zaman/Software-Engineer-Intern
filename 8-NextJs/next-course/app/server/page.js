import React from 'react';

const Server = () => {
    // console.log('Hello from the (server component)');
    return (
        <div>
            <button
                className='border bg-green-200 ml-5 my-10 px-2 py-4'
            // onClick={() => alert('Hello Server')}    // Give Error because Server Component
            >
                Click Me
            </button>
        </div>
    )
}

export default Server;