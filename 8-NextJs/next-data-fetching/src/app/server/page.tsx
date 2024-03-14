import Image from "next/image";
import Link from "next/link";
import axios from 'axios';

async function getData() {
    // const res = await fetch('https://dummyjson.com/products/10');
    // if (!res.ok) {
    //     throw new Error('Failed to fetch data');
    // }
    // return res.json();

    const response = await axios.get('https://dummyjson.com/products/10');
    // console.log(response.data);
    return response.data;
}

export default async function Page() {
    const data = await getData();
    console.log(data);

    return (
        <main className='flex flex-col items-center justify-center'>
            <p className='m-5 text-center'>Server Component</p>
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
                        <p>Rating: {data.rating}</p>
                        <Image src={data.images[0]} alt='img' width={400} height={170} />
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </main>
    );
}