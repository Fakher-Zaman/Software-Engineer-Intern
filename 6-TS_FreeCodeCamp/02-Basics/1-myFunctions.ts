function addTwo(num: number): number {
    return num + 3;
}

function getUpper(val: string): string {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
    return `User ${name} with email ${email} has paid: ${isPaid}`;
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    return `User ${name} with email ${email} has paid: ${isPaid}`;
}

console.log(addTwo(2));
console.log(getUpper("fakher"));
console.log(signUpUser("Fakher", "fakherzamanofficial@gmail.com", true));
console.log(loginUser("Hammad", "hammadasif@gmail.com"));

function getValue(myVal: number): string | boolean {
    if (myVal > 10) {
        return "Greater than 10";
    }
    return false;
}

console.log(getValue(11));

const getHello = (name: string): string => {
    return `Hello ${name}`;
}

console.log(getHello("Fakher"));

// const heros = [1, 2, 3];
const heros = ["Spiderman", "Batman", "Superman"];
heros.push("Ironman");
heros.map((hero: string): string => {
    return `Our hero is ${hero}`;
});

function consoleError(errmsg: string): void {
    console.log(errmsg);
    // return 1;   // Error: Type '1' is not assignable to type 'void'.
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

export { }      // Temproray fix for redeclaration error (squiggly lines)