// const cart = ["shoes", "pants", "shirts"];

// createOrder(cart, function (orderId) {
//     proceedToPayment(orderId);
// });

const promise = createOrder(cart);

promise.then(function (orderId) {
    proceedToPayment(orderId);
});

const EXP_API = "https://fakher-zaman.github.io/API-Collection/experience-api.json";

const user = fetch(EXP_API);

console.log(user);

user.then(function (data) {
    console.log(data);
});