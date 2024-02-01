// string
let greetings: string = "Hello Fakher";
greetings.toLowerCase();
console.log(greetings);
// greetings = 23; // Error: Type '23' is not assignable to type 'string'.

// number
let userId = 334455;
userId.toFixed();
// userId = "Fakher"    // Error: Type '"Fakher"' is not assignable to type 'number'.

// boolean
let isLoggedIn: boolean = true;

// any (avoid it)
let hero;
function getHero() {
    return "Superman";
}
hero = getHero();

export { }      // Temproray fix for redeclaration error (squiggly lines)

