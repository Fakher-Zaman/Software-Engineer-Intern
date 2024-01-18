class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}

const date = new Date();
let year = date.getFullYear();

const myCar = new Car("Ford", 2014);
console.log("My car is " + myCar.age(year) + " years old.");