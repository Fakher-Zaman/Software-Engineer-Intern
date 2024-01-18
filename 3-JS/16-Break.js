const cars = ["Audi", "BMW", "Lamborghini", "Ferrari"];

let txt = "";

list: {
    txt += cars[0] + "\n";
    txt += cars[1] + "\n";
    break list;
    txt += cars[2];
    txt += cars[3];
}

console.log(txt);