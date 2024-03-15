"use client";

import React, { useCallback, useState } from 'react';
import Todos from '../components/Todos';

const Page = () => {
    const [count, setCount] = useState<number>(0);
    const [todos, setTodos] = useState<string[]>([]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
        //eslint-disable-next-line
    }, [todos]);

    return (
        <div className='flex flex-col justify-center'>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div className='flex flex-col justify-center items-center m-4'>
                count: {count}
                <button
                    onClick={increment}
                    className='px-4 py-2 m-2 bg-blue-500 text-white'
                >+</button>
            </div>
        </div>
    );
};

export default Page;