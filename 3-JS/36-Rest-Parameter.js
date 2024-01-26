function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

const result = sum(1, 2, 3, 4, 5, 6, 7, 8);
console.log(result);