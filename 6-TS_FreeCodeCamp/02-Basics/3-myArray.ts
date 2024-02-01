const superHeros: string[] = [];
// const heroPower: number[] = [];
const heroPower: Array<number> = [];

type User = {
    name: string;
    isActive: boolean;
}

const users: User[] = [
    {
        name: "Superman",
        isActive: true
    },
    {
        name: "Batman",
        isActive: true
    },
    {
        name: "Spiderman",
        isActive: false
    },
    {
        name: "Ironman",
        isActive: true
    },
    {
        name: "Hulk",
        isActive: false
    },
    {
        name: "Thor",
        isActive: true
    },
    {
        name: "Captain America",
        isActive: false
    },
    {
        name: "Black Panther",
        isActive: true
    },
    {
        name: "Black Widow",
        isActive: false
    }
];

console.log(users[0]);      // { name: 'Superman', isActive: true }
console.log(users[1].name);     // Batman
console.log(users[2].isActive);     // false

superHeros.push("Superman");
superHeros.push("Batman");
superHeros.push("Spiderman");
superHeros.push("Ironman");
superHeros.push("Hulk");
superHeros.push("Thor");
superHeros.push("Captain America");
superHeros.push("Black Panther");
superHeros.push("Black Widow");

heroPower.push(100);
heroPower.push(200);
heroPower.push(300);
heroPower.push(400);
heroPower.push(500);
heroPower.push(600);
heroPower.push(700);
heroPower.push(800);
heroPower.push(900);

console.log(superHeros);
console.log(heroPower);

const MLModels: number[][] = [
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255]
];

console.log(MLModels);

export { };