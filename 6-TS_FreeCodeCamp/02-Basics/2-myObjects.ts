const User = {
    name: 'John',
    age: 30,
    isAdmin: true
}

// function createUser({ name, age, isAdmin }: typeof User) {
//     console.log(name, age, isAdmin);
// }

// createUser(User);

function createUser(): {
    name: string,
    age: number,
    isAdmin: boolean
} {
    return {
        name: 'John',
        age: 30,
        isAdmin: true
    }
}

const user = createUser();
// console.log(user);

// optional properties
// function createUser2({ name: string, isPaid: boolean }) { }
// let user2 = { name: "Fakher", isPaid: false, email: "f@z.com" };
// createUser2(user2);

// Aliasing
type User2 = {
    name: string,
    age: number,
    isAdmin: boolean
}

function createUser3(user: User2): User2 {
    return user;
}

createUser3({ name: 'Fakher Zaman', age: 30, isAdmin: true });

// Read Only (Optional)
type User3 = {
    readonly _id: string,   // readonly
    name: string,
    age: number,
    isAdmin: boolean,
    creditCard?: number // optional
}

let myUser: User3 = {
    _id: '123',
    name: 'Fakher',
    age: 30,
    isAdmin: true
}

myUser.name = 'Zaman';
// myUser._id = '456';     // Error

// Index Signature
type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

// & means intersection - combine two types
type cardDetails = cardNumber & cardDate & {
    cvv: number
};

export { }