import { redirect } from 'next/navigation';
import React from 'react';

const ID = ({ params }) => {
    if (params.id == 4) {
        redirect('/login');
    }
    return (
        <div>{params.id}</div>
    )
}

export default ID;