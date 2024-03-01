import { FC } from "react";

type Shape = {
    name: string;
    age: number;
}

const User: FC<Shape> = ({ name, age }) => {
    return (
        <main>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </main>
    )
}

export default User;