"use client";

import { Button } from '@nextui-org/button';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <>
            <div className='text-center'>404 page not found</div>
            <Button className='flex mt-9 mx-auto'>
                <Link href="/">Back to Home</Link>
            </Button>
        </>
    )
}

export default NotFound;