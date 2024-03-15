"use client";

import React, { useMemo, useState } from 'react'

const Page = () => {
    const [count, setCount] = useState<number>(0);
    const [todos, setTodos] = useState<string[]>([]);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-center mt-4 mb-2 text-blue-800 font-bold'>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button
                    onClick={addTodo}
                    className='px-4 py-2 mt-2 mb-4 bg-blue-500 text-white w-35 mx-auto'
                >Add Todo</button>
            </div>
            <hr />
            <div className='flex flex-col justify-center items-center m-4'>
                Count: {count}
                <button
                    onClick={increment}
                    className='px-4 py-2 m-2 bg-blue-500 text-white'
                >+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    );
};

const expensiveCalculation = (num: number) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};

export default Page;