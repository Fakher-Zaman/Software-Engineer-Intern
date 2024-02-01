// Simple User
const user: (string | number)[] = [1, "Fakher"];

// Tuple User (Order Matters)
let tUser: [number, string, boolean];
// tUser = [true, "Fakher", 1];    // Error  -> Type 'true' is not assignable to type 'number'
tUser = [1, "Fakher", true]; // OK
let rgb: [number, number, number] = [255, 0, 0];

type User = [number, string, boolean];
const newUser: User = [1, "Fakher", true];
newUser[0] = 2; // OK
console.log(newUser[0]); // 2

export { }