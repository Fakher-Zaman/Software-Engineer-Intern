import { useContext } from "react";
import { MyContext } from "@/content/MyContext";

const MyComponent = () => {
    const { count, increment, decrement } = useContext(MyContext);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement-</button>
        </div>
    )
}

export default MyComponent;