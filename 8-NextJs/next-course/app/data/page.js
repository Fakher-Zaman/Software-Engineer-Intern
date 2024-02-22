"use client";

import { useEffect, useState } from "react";

const Data = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let data = await fetch('https://jsonplaceholder.typicode.com/posts');
            data = await data.json();
            setProduct(data);
            console.log(data);
        }
        fetchData();
    }, [])

    return (
        <>
            <ul>
                {product?.map((p) => (
                    <li key={p.id} className="border m-5 py-2 px-4 bg-yellow-100">
                        <span>{p.title}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Data;