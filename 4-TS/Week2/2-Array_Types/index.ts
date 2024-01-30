// Array Types
// Can you add a stayedAt property to the you Object, that contains places you 
// have stayed as strings, then add the correct key with assigned type to the 
// existing Object Type?

const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
const reviewTotalDisplay = document.querySelector('#reviews');

let isOpen: boolean;
isOpen = true;

const reviews: {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}[] = [
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

function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : '';
    if (reviewTotalDisplay) {
        reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
    }
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[];
    // at: [string, string, string, number];
    // at: (string | number)[];
} = {
    firstName: 'Fakher',
    lastName: 'Zaman',
    isReturning: true,
    age: 23,
    stayedAt: ['London', 'Manchester', 'Pakistan'],
    // at: ['London', 'Manchester', 'Pakistan', 1],
}

function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
        if (returningUserDisplay) {
            returningUserDisplay.innerHTML = 'back';
        }
    }
    if (userNameDisplay) {
        userNameDisplay.innerHTML = userName;
    }
}

populateUser(you.isReturning, you.firstName);