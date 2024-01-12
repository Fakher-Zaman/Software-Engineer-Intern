console.log("=> The const value cannot be reassigned.");
const PI = 3.141592653589793;
// PI = 3.14;          // This will give an error.
console.log(PI);

console.log("=> Must be Assigned:");
const _name = "Fakher Zaman";        // Correct
// _name = "Fakher Zaman";          // Incorrect (It will give an error)
// const _name;
console.log(_name);

console.log("=> Constant Array:");
const cars = ["BMW", "Volvo", "Audi"];
// cars = ["Car1", "Car2", "Car3"];         // Give an error because we not reassign the const value/array/object.
cars[0] = "Land Cruser";
cars.push("Corola");
console.log(cars);

console.log("=> Constant Object:");
const student = {
    name: 'Fakher',
    rollNo: '034851',
    degree: 'BS-IT',
};
student = { key1: "Value1", key2: "Value2", }
student.name = "Fakher Zaman";
student.rollNo = "2019-034851";
student.degree = "BS Information Technology";
console.log(student);