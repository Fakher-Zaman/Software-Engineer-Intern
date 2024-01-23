let printFullName = function (age, city) {
    console.log(this.firstName + " " + this.lastName + " is " + age + " years old from " + city + ".");
}

let name1 = {
    firstName: "Fakher",
    lastName: "Zaman",
}

printFullName.call(name1, 23, "Shahdara");

let name2 = {
    firstName: "Hammad",
    lastName: "Asif",
}

// function borrowing
printFullName.call(name2, 23, "Narowal");

let name3 = {
    firstName: "Muhammad",
    lastName: "Shaban",
}
// apply method
printFullName.apply(name3, [24, "Kasur"]);

let name4 = {
    firstName: "Zeeshan",
    lastName: "Chadhar",
}
// bind method
let printMyName = printFullName.bind(name4, 22, "Lahore");
console.log(printMyName);
printMyName();