/*
    What is async?
    What is await?
    How async await work behind the scenes?
    Examples of using async/await
    Error handling
    Interviews
    Async await vs Promise.then/.catch
*/

/*
// => First Code: always returns a promise
async function getData() {
    return "Hello World!";
}
const dataPromise = getData();
console.log(dataPromise);
dataPromise.then((res) => console.log(res));
*/

/*
// => Second Code:
const p = new Promise((resolve, reject) => {
    resolve("Promise Resolved Value");
});
// => Always return a promise
async function getData() {
    return p;
}
const dataPromise = getData();
dataPromise.then((res => console.log(res)));
*/

/*
// => Third Code:
const p = new Promise((resolve, reject) => {
    resolve("Promise Resolved Value!");
});
async function handlePromise() {
    const val = await p;
    console.log(val);
}
handlePromise();
*/

/*
// => Fourth Code:
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value()");
    }, 5000);
});
function getData() {
    // JS Engine will not wait for promise to be resolved
    p.then((res) => console.log(res));
    console.log("JavaScript Here!");
}
getData();
*/

/*
// => Fifth Code (Reason behind the usage of async/await instead of Promises):
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!");
    }, 3000);
});
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!");
    }, 6000);
});
// await can only be used inside an async function
async function handlePromise() {
    console.log("Hello World!");

    const val = await p;
    console.log("Hello JavaScript 1!");
    console.log(val);

    const val2 = await p;
    console.log("Hello JavaScript 2!");
    console.log(val2);

    const val3 = await p1;
    console.log("Hello JavaScript 3!");
    console.log(val3);
}
handlePromise();
*/

// => Sixth Code
const API_URL = "https://fakher-zaman.github.io/API-Collection/experience-api.json";

async function handlePromise() {
    try {
        const data = await fetch(API_URL);
        // console.log(data);
        const jsonValue = await data.json();
        console.log(jsonValue);
    } catch {
        console.log(error);
    }
}
handlePromise();