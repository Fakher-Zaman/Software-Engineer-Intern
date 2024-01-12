function EvenOdd() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var odd = [], even = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            // console.log("Even Numbers: " + arr[i]);
            even.push(arr[i]);
        } else {
            // console.log("Odd Numbers: " + arr[i]);
            odd.push(arr[i]);
        }
    }

    console.log("Even Numbers: " + "[" + even + "]");
    console.log("Odd Numbers: " + "[" + odd + "]");
}

EvenOdd();

let x = func1(10, 20);

function func1(x, y) {
    let result = x + y;
    return result;
}

console.log(x);