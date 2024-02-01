var score = 10;
score = 20;
score = "30";
// let zeeshan: Admin = {  // Error -> Property 'role' is missing in type '{ name: string; id: number; }' but required in type 'Admin'
//     name: "zeeshan",
//     id: 2,
// }
var fakher = {
    name: "Fakher",
    id: 1,
    role: "Admin"
};
var hammad = {
    name: "Hammad",
    id: 2,
};
// function getDbId(id: number | string) {
//     // making some API call
//     console.log(`Getting user with id ${id} from database`);
// }
getDbId(1);
getDbId("hello");
function getDbId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else if (typeof id === "number") {
        console.log(id.toFixed(2));
    }
    else {
        console.log(id);
    }
}
var data = [1, 2, 3, 4, 5];
var data2 = ["1", "2", "3", "4", "5"];
var data3 = [1, 2, 3, "4", "5", "6"];
console.log(data, data2, data3);
var seatAllotment;
seatAllotment = "window";
seatAllotment = "aisle";
seatAllotment = "middle";
// seatAllotment = "hello"; // Error -> Type '"hello"' is not assignable to type '"window" | "aisle" | "middle"'.
