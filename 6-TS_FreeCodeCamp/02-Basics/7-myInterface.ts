interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string,
    startTrial(): string,
    getCoupon(couponname: string, value: number): number
}

// re-assigning the value of the property (**alowed instead type alias)
interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "superadmin" | "support"
}

const hitesh: Admin = {
    dbId: 22,
    email: "h@h.com",
    userId: 1211,
    startTrial: () => {
        return "Trial Started";
    },
    getCoupon: (name: "fakher", num: 10) => {
        return 20;
    },
    githubToken: "zaman",
    role: "admin"
}

hitesh.email = "hello@gmail.com";
// hitesh.dbId = 33; // Error: Cannot assign to 'dbId' because it is a read-only property.
console.log(hitesh);
console.log(hitesh.email);
console.log(hitesh.startTrial());
console.log(hitesh.getCoupon("fakher", 10));