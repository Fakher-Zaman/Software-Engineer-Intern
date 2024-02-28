// type UserShape = {
//     name: string;
//     age: number;
// }

interface UserShape {
    name: string;
    age: number;
}

const User = ({ name, age }: UserShape) => {
    return (
        <main>
            <h1>{name}</h1>
            <p>{age}</p>
        </main>
    )
}

export default User;