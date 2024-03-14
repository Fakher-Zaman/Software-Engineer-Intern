"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

const Axios = () => {
    const [data, setData] = useState<Product | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products/1');
                const jsonData = response.data;
                console.log(jsonData);
                setData(jsonData);
            } catch (error) {
                console.log('Error:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='m-5'>Get Data with Axios</div>
            <Link href="/">
                <button className='bg-blue-900 text-white py-2 px-4 rounded'>Back To Home</button>
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
                        <Image src={data.images[0]} alt='img' width={400} height={170} />
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default Axios;