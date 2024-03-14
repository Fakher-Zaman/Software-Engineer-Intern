"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Product {
    id: number;
    title: string;
    price: string;
    description: string;
    brand: string;
    category: string;
    images: string;
    rating: number;
}

const Fetch = () => {
    const [data, setData] = useState<Product | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products/9');
                const jsonData = await response.json();
                console.log(jsonData);
                setData(jsonData);
            } catch {
                console.log('Error');
            }
        }
        fetchData();
    }, []);

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='m-5'>Get Data with Fetch</div>
            <Link href="/">
                <button className='bg-green-900 text-white py-2 px-4 rounded'>Back To Home</button>
            </Link>
            <div className='m-4 '>
                {data ? (
                    <>
                        <h1>ID: {data.id}</h1>
                        <h1>Title: {data.title}</h1>
                        <p>Price: {data.price}</p>
                        <p>Description: {data.description}</p>
                        <p>Brand: {data.brand}</p>
                        <p>Category: {data.category}</p>
                        <p>Rating: {data.rating}</p>
                        <Image src={data.images[0]} alt='img' width={400} height={170} />
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default Fetch;