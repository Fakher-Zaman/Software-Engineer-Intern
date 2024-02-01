let score: (number | string) = 10;
score = 20;
score = "30";
// score = true; // Error

// aliases
type User = {
    name: string;
    id: number;
}

type Admin = {
    name: string;
    id: number;
    role: string;
}

// let zeeshan: Admin = {  // Error -> Property 'role' is missing in type '{ name: string; id: number; }' but required in type 'Admin'
//     name: "zeeshan",
//     id: 2,
// }

let fakher: (User | Admin) = {
    name: "Fakher",
    id: 1,
    role: "Admin"
}

let hammad: User = {
    name: "Hammad",
    id: 2,
}

// function getDbId(id: number | string) {
//     // making some API call
//     console.log(`Getting user with id ${id} from database`);
// }

getDbId(1);
getDbId("hello");

function getDbId(id: number | string) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else if (typeof id === "number") {
        console.log(id.toFixed(2));
    } else {
        console.log(id);
    }
}

const data: number[] = [1, 2, 3, 4, 5];
const data2: string[] = ["1", "2", "3", "4", "5"];
const data3: (string | number)[] = [1, 2, 3, "4", "5", "6"];
console.log(data, data2, data3);

let seatAllotment: "window" | "aisle" | "middle";
seatAllotment = "window";
seatAllotment = "aisle";
seatAllotment = "middle";
// seatAllotment = "hello"; // Error -> Type '"hello"' is not assignable to type '"window" | "aisle" | "middle"'.