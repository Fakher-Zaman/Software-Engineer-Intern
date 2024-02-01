var hitesh = {
    dbId: 22,
    email: "h@h.com",
    userId: 1211,
    startTrial: function () {
        return "Trial Started";
    },
    getCoupon: function (name, num) {
        return 20;
    },
    githubToken: "zaman",
    role: "admin"
};
hitesh.email = "hello@gmail.com";
// hitesh.dbId = 33; // Error: Cannot assign to 'dbId' because it is a read-only property.
console.log(hitesh);
console.log(hitesh.email);
console.log(hitesh.startTrial());
console.log(hitesh.getCoupon("fakher", 10));
