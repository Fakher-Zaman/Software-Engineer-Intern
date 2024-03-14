"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type UserContextType = {
    user: string;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const Context = () => {
    const [user, setUser] = useState<string>('Fakher Zaman');

    useEffect(() => {
        setUser("Fakher Zaman");
    }, []);

    return (
        <UserContext.Provider value={{ user }}>
            <div className='m-4'>
                <h1>{`Hello ${user}`}</h1>
                <Component1 />
            </div>
        </UserContext.Provider>
    )
}

function Component1() {
    return (
        <div>
            <h1>Component 1</h1>
            <Component2 />
        </div>
    );
}

function Component2() {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 />
        </>
    );
}

function Component3() {
    return (
        <>
            <h1>Component 3</h1>
            <Component4 />
        </>
    );
}

function Component4() {
    return (
        <>
            <h1>Component 4</h1>
            <Component5 />
        </>
    );
}

function Component5() {
    const { user } = useContext(UserContext)!;

    return (
        <>
            <h1>Component 5</h1>
            <h1>{`Hello ${user} again!`}</h1>
        </>
    );
}

export default Context;