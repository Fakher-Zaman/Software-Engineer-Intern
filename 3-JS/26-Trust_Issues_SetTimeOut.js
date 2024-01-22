console.log("Start Program");

setTimeout(function callback() {
    console.log("Callback");
}, 5000);

console.log("End Program");

// million lines of code here

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}

console.log("While Loop Expire Here");