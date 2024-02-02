interface Database {
    connection: string;
    username: string;
    password: string;
}

function anotherFunction<U, V, W extends Database>(valueOne: U, valueTwo: V, valueThree: W): object {
    // do some database operations
    return {
        valueOne,
        valueTwo,
        valueThree
    };
}

const result = anotherFunction("10", "20", { connection: "localhost", username: "root", password: "root" });
console.log(result);