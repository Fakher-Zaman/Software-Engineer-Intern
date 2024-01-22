const users = [
    { firstName: "Fakher", lastName: "Zaman", age: 23 },
    { firstName: "Hammad", lastName: "Asif", age: 23 },
    { firstName: "Ali", lastName: "Hamza", age: 21 },
    { firstName: "Muhammad", lastName: "Shaban", age: 23 }
]

// Iterate the users with the display of full name
console.log(users.map((x) => x.firstName + " " + x.lastName));

// {'23' : 3, '21' : 1}
console.log(users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {}));

// Display the first name of users whose age is equal to 23
console.log(users.filter((x) => (x.age === 23)).map((x) => x.firstName));