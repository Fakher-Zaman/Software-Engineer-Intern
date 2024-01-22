const arr = [5, 1, -2, 3, 0, 2, 6, -1];
const nums = [1, 2, 3, 4, 5];

// Map Function (Transformation of values)
function double(val) {
    return val * 2;
}
console.log(arr.map(double));

// Filter Function (Filter the values)
function greaterThanZero(val) {
    return val > 0;
}
console.log(arr.filter(greaterThanZero));
console.log(arr.find(greaterThanZero));

// Reduce Function (Return the single value)
function findSum(values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
}
console.log("Sum of Values: " + findSum(nums));

const output = nums.reduce(function (acc, curr) {
    acc += curr;
    return acc;
}, 0);
console.log("Sum of Values: " + output);

// Find Maximum Number
console.log("Maximum Number is = " + nums.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0));