"use client";

import React, { useReducer } from 'react';

type Todo = {
    id: number;
    title: string;
    completed: boolean;
};

type TodoState = Todo[];

const initialState = [
    {
        id: 1,
        title: 'Todo 1',
        completed: false,
    },
    {
        id: 2,
        title: 'Todo 2',
        completed: false,
    },
    {
        id: 3,
        title: 'Todo 3',
        completed: false,
    },
];

type Action = {
    type: string;
    payload: number;
};

const reducer = (state: TodoState, action: Action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo: Todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
        default:
            return state;
    }
}

const Todos = () => {
    const [todos, dispatch] = useReducer(reducer, initialState);

    const handleComplete = (todo: Todo) => {
        dispatch({ type: "COMPLETE", payload: todo.id });
    };

    return (
        <>
            <p className='m-4 text-center'>useReducer</p>
            {
                todos.map((todo: Todo) => (
                    <div key={todo.id} className='flex justify-evenly items-center m-2'>
                        <span>{todo.title}</span>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleComplete(todo)}
                        />
                    </div>
                ))
            }
        </>
    )
}

export default Todos;