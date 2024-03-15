"use client";

import React from 'react';
import useFetch from './useFetch';

type Todo = {
    id: number;
    title: string;
};

const Page = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    if (!data) {
        return <div className='text-center m-4'>Loading...</div>;
    }

    return (
        <>
            {data.map((item: Todo) => {
                return <p
                    key={item.id}
                    className='text-center m-4 text-blue-800 font-bold'
                >
                    {item.title}
                </p>;
            })}
        </>
    );
};

export default Page;