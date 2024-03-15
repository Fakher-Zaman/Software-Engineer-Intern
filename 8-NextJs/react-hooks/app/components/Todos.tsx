import React, { memo } from 'react';

type TodosProps = {
    todos: string[];
    addTodo: () => void;
}

const Todos: React.FC<TodosProps> = ({ todos, addTodo }) => {
    console.log("child render");

    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-center mt-4 mb-2 text-blue-800 font-bold'>My Todos</h2>
            {
                todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>
                })
            }
            <button
                onClick={addTodo}
                className='px-4 py-2 mt-2 mb-4 bg-blue-500 text-white w-35 mx-auto'
            >Add Todo</button>
        </div>
    )
}

export default memo(Todos);