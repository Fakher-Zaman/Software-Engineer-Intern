// Working with objects in TypeScript

interface User {
    firstName: string;
    lastName: string;
    age: number;
}

const mechanic: User = {
    firstName: "Hammad",
    lastName: "Asif",
    age: 23
}

const customer: User = {
    firstName: "Fakher",
    lastName: "Zaman",
    age: 23
}

const admin: User = {
    firstName: "Muhammad",
    lastName: "Shaban",
    age: 24
}

console.log("Mechanic: " + mechanic.firstName + " " + mechanic.lastName + " " + mechanic.age
    + "\nCustomer: " + customer.firstName + " " + customer.lastName + " " + customer.age
    + "\nAdmin: " + admin.firstName + " " + admin.lastName + " " + admin.age);

// Working With Classes in TypeScript

class VirtualPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const newVPoint = new VirtualPoint(10, 20);
console.log(newVPoint);