"use strict";
// Classes
// class User {
//     public email: string;
//     private name: string;
//     // #name: string;   // same as private
//     readonly city: string = "";
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
// another way to write accessors (more programmers friendly)
class User {
    constructor(email, name, age = 0) {
        this.email = email;
        this.name = name;
        this.age = age;
        this._courseCount = 1; // protected: can be accessed by child classes
        this.city = "Islamabad";
        this.email = email;
        this.name = name;
        this.city = "Lahore";
        this.age = age;
    }
    deleteToken() {
        console.log("Token is deleted");
    }
    // getter
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    // setter
    set setAppleEmail(email) {
        this.email = `apple ${email}`;
    }
    set setCourseCount(count) {
        if (count <= 1) {
            throw new Error("Invalid course count");
        }
        else {
            this._courseCount = count;
        }
    }
    register() {
        console.log(`${this.name} is now registered`);
    }
}
// Inheritance
class SubUser extends User {
    constructor() {
        // constructor(email: string, name: string, age: number) {
        //     super(email, name, age);
        // }
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const user = new User("f@f.com", "Fakher", 23);
// user.city = "Tunis";    // Error: Cannot assign to 'city' because it is a read-only property.
console.log(user.getAppleEmail);
user.setAppleEmail = "xxxxxx@xxxxxx.com";
console.log(user.getAppleEmail);
user.setCourseCount = 2;
console.log(user.getCourseCount);
user.register();
console.log(user);
