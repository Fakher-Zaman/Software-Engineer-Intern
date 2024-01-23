/* 
    Divide the callbacks into two major catogories:
    1) Importance of callbacks
    2) Issues with callbacks
        a) Callback Hell
        b) Inversion of Control
*/

// 1) Importance of callbacks
console.log("Hello World!");
setTimeout(function () {
    console.log("JavaScript Here!");
}, 5000);

const cart = ["shoes", "pants", "shirts"];

// 2) Issues with callbacks (We loose control of the program here):
// a) Callback Hell (Display the nested callbacks horizontally)
api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet(function () {
                api.updateItems();
            });
        });
    });
});

// b) Inversion of Control (To save by the inversion of control we using the promises in JS)
api.createOrder(cart, function () {
    api.proceedToPayment();
});