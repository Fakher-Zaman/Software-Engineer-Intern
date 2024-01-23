const cart = ["shoes", "pants", "shirts"];

createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWalletBalance();
        });
    });
});

createOrder(cart)
    .then(function (orderId) {
        proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        showOrderSummary(paymentInfo);
    })
    .then(function (paymentInfo) {
        updateWalletBalance(paymentInfo);
    });