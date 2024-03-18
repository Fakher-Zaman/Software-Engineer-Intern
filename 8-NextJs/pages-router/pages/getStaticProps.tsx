import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';

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

export const getStaticProps = (async (context) => {
    const res = await fetch('https://dummyjson.com/products/8');
    const prop = await res.json();
    return { props: { prop } }
}) satisfies GetStaticProps<{
    prop: Product
}>

export default function Page({
    prop,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <main className='flex flex-col justify-center items-center m-3'>
            <Link href="/">
                <button className='bg-red-400 text-white py-2 px-4 rounded'>Back To Home</button>
            </Link>
            <div className='m-4'>
                <p className='m-2'><span className='bg-blue-100 px-2 py-1'>ID:</span> {prop.id}</p>
                <p className='m-2'><span className='bg-blue-100 px-2 py-1'>Title:</span> {prop.title}</p>
                <p className='m-2'><span className='bg-blue-100 px-2 py-1'>Price:</span> {prop.price}</p>
                <p className='m-2'><span className='bg-blue-100 px-2 py-1'>Description:</span> {prop.description}</p>
                <p className='m-2'><span className='bg-blue-100 px-2 py-1'>Brand:</span> {prop.brand}</p>
                <p className='m-2'><span className='bg-blue-100 px-2 py-1'>Category:</span> {prop.category}</p>
                <p className='m-2'><span className='bg-blue-100 px-2 py-1'>Rating:</span> {prop.rating}</p>
                <Image src={prop.images[0]} alt='img' width={400} height={170} className='mt-4 m-auto' />
            </div>
        </main>
    );
}