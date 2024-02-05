// There are many Special Types are involved.

// 1 - Any Type
let v: any = true;
v = 34;
console.log("The typeof v is " + typeof v + " & the value of v is " + v);

// 2 - Unknown Type
let w: unknown = 55;
w = "Hello World";
console.log("The typeof w is " + typeof w + " & the value of w is " + w);

// 3 - Undefined Type
let x: undefined = undefined;
console.log(typeof (x));

// 4 - null
let y: null = null;
console.log(typeof (y));
