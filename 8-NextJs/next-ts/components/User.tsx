import { type ReactNode } from "react";

type UserShape = { children: ReactNode };

const User = ({ children }: UserShape) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default User;