import React, { useEffect, useState } from 'react';

const MyComponent = () => {
    const [data, setData] = useState<Product | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/product/1');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error(`Error fetching data: ${error}`);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                <div>
                    <p>ID: {data.id}</p>
                    <p>Title: {data.title}</p>
                    <p>Description: {data.description}</p>
                    <p>Price: {data.price}</p>
                    <p>Discount Percentage: {data.discountPercentage}</p>
                    <p>Stock: {data.stock}</p>
                    <p>Brand: {data.brand}</p>
                    <p>Category: {data.category}</p>
                    <p>Thumbnail: {data.thumbnail}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default MyComponent;