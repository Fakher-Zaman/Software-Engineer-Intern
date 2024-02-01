var User = {
    name: 'John',
    age: 30,
    isAdmin: true
};
// function createUser({ name, age, isAdmin }: typeof User) {
//     console.log(name, age, isAdmin);
// }
// createUser(User);
function createUser() {
    return {
        name: 'John',
        age: 30,
        isAdmin: true
    };
}
var user = createUser();
function createUser3(user) {
    return user;
}
createUser3({ name: 'Fakher Zaman', age: 30, isAdmin: true });
var myUser = {
    _id: '123',
    name: 'Fakher',
    age: 30,
    isAdmin: true
};
myUser.name = 'Zaman';
// myUser._id = '456';     // Error