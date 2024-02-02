// #1: type narrowing (detection)

function detectType(val: number | string) {
    if (typeof val === "string") {
        return val.toLocaleLowerCase();
    }
    return val + 4;
}

function provideId(id: string | null) {
    if (!id) {
        console.log("No ID provided");
        return;
    }
    id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs === "object") {
            for (const str of strs) {
                console.log(str);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}

printAll(["one", "two", "three"]);
printAll("four");
printAll(null);
// printAll(undefined);    // Error: Argument of type 'undefined' is not assignable to parameter of type 'string | string[] | null'.

interface Quiz {
    name: string;
    type: string;
}

interface Course {
    name: string;
    author: string;
    subject: string;
}

class Sellable<T> {
    public cart: T[] = [];

    addToCart(item: T): void {
        this.cart.push(item);
    }
}

// #2: The in operator narrows the type of the variable in the block
interface User {
    name: string;
    email: string;
}

interface Admin {
    name: string;
    email: string;
    isAdmin: boolean;
}

function isAdmin(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    } else {
        return false;
    }
}

const output = isAdmin(
    {
        name: "John",
        email: "john@gmail.com",
        isAdmin: true
    }
);
console.log(output);

// #3: Instance typeof and Type Predicates:
function isNumber(x: any): x is number {
    return typeof x === "number";
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "Fish Food";
    } else {
        pet
        return "Bird Food";
    }
}

// #4: Discriminated Unions and Exhaustiveness checking with never:
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.width * shape.height;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

console.log(getTrueShape({ kind: "circle", radius: 10 }));