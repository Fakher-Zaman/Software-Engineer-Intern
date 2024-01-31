// Number Types mini-challenge
// Write a function that will only accept numbers and attend to 
// all 'any' TypeScript weakness flags.
const reviewTotalDisplay = document.querySelector('#reviews');
const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
];
function showReviewTotal(value) {
    if (reviewTotalDisplay) {
        reviewTotalDisplay.textContent = value.toString();
    }
}
showReviewTotal(reviews.length);
// console.log("hello");
//# sourceMappingURL=index.js.map