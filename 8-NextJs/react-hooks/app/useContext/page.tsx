"use client";

import React, { useEffect, useState } from 'react';

const Context = () => {
    const [user, setUser] = useState('');

    useEffect(() => {
        setUser("Fakher Zaman");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h1>{`Hello ${user}`}</h1>
            <Component1 user={user} />
        </>
    )
}

function Component1({ user }: { user: string }) {
    return (
        <>
            <h1>Component 1</h1>
            <Component2 user={user} />
        </>
    );
}

function Component2({ user }: { user: string }) {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 user={user} />
        </>
    );
}

function Component3({ user }: { user: string }) {
    return (
        <>
            <h1>Component 3</h1>
            <Component4 user={user} />
        </>
    );
}
function Component4({ user }: { user: string }) {
    return (
        <>
            <h1>Component 4</h1>
            <Component5 user={user} />
        </>
    );
}
function Component5({ user }: { user: string }) {
    return (
        <>
            <h1>Component 5</h1>
            <h1>{`Hello ${user} again!`}</h1>
        </>
    );
}

export default Context;