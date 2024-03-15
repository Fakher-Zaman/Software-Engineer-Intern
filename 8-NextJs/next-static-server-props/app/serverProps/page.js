// pages/example.js

import React from 'react';

// This function will be called at the server side
export async function getServerSideProps(context) {
    // Fetch data from an API
    const res = await fetch('https://dummyjson.com/products/1');
    const data = await res.json();

    // Pass data as props to the page component
    return {
        props: {
            data,
        },
    };
}

// Page component that receives data as props
function ExamplePage({ data }) {
    return (
        <div>
            <h1>Server-Side Rendering Example</h1>
            <p>Data fetched server-side:</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default ExamplePage;