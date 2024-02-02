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
    protected _courseCount = 1;     // protected: can be accessed by child classes
    readonly city: string = "Islamabad";

    constructor(public email: string, public name: string, private age: number = 0) {
        this.email = email;
        this.name = name;
        this.city = "Lahore";
        this.age = age;
    }

    private deleteToken() {
        console.log("Token is deleted");
    }

    // getter
    get getAppleEmail(): string {
        return `apple ${this.email}`;
    }

    get getCourseCount(): number {
        return this._courseCount;
    }

    // setter
    set setAppleEmail(email: string) {
        this.email = `apple ${email}`;
    }

    set setCourseCount(count: number) {
        if (count <= 1) {
            throw new Error("Invalid course count");
        } else {
            this._courseCount = count;
        }
    }

    public register() {
        console.log(`${this.name} is now registered`);
    }
}

// Inheritance
class SubUser extends User {
    // constructor(email: string, name: string, age: number) {
    //     super(email, name, age);
    // }

    isFamily: boolean = true;
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
