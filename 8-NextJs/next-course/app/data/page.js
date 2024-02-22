async function fetchData() {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos');
    data = await data.json();
    return data;
}

const Data = async () => {
    let products = await fetchData();
    console.log(products);

    return (
        <div>
            <div className="flex flex-col">
                {products?.map((p) => (
                    <p key={p.id}>{p.title}</p>
                ))}
            </div>
        </div>
    )
}

export default Data;