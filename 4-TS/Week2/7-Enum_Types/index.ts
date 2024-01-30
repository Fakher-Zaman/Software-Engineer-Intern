// Enum Types
const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')

const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')

function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    if (reviewTotalDisplay)
        reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
        if (returningUserDisplay)
            returningUserDisplay.innerHTML = 'back'
    }
    if (userNameDisplay)
        userNameDisplay.innerHTML = userName
}

let isOpen: boolean

// Reviews
const reviews: {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string
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
    ]

// User
// const you: {
//     firstName: string;
//     lastName: string;
//     isReturning: boolean;
//     age: number;
//     stayedAt: string[]
// } = {
//     firstName: 'Bobby',
//     lastName: 'Brown',
//     isReturning: true,
//     age: 35,
//     stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
// }

const ADMIN = 'admin';
const READ_ONLY = 'read_only';

enum permissions { ADMIN, READ_ONLY }

const you = {
    firstName: 'Fakher',
    lastName: 'Zaman',
    permissions: permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

// Array of Properties
const properties: {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: [number, string];
    isAvailable: boolean;
}[] = [
        {
            image: 'images/colombia-property.jpg',
            title: 'Colombian Shack',
            price: 45,
            location: {
                firstLine: 'shack 37',
                city: 'Bogota',
                code: 45632,
                country: 'Colombia'
            },
            contact: [+112343823978921, 'marywinkle@gmail.com'],
            isAvailable: true
        },
        {
            image: 'images/poland-property.jpg',
            title: 'Polish Cottage',
            price: 34,
            location: {
                firstLine: 'no 23',
                city: 'Gdansk',
                code: 343903,
                country: 'Poland'
            },
            contact: [+1298239028490830, 'garydavis@hotmail.com'],
            isAvailable: false
        },
        {
            image: 'images/london-property.jpg',
            title: 'London Flat',
            price: 23,
            location: {
                firstLine: 'flat 15',
                city: 'London',
                code: 35433,
                country: 'United Kingdom',
            },
            contact: [+34829374892553, 'andyluger@aol.com'],
            isAvailable: true
        }
    ]


// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

// Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    if (propertyContainer)
        propertyContainer.appendChild(card)
}

// use your location, your current time, and the current temperature of your
// location
let currentLocation: [string, string, number] = ["London", "12:00", 15];
if (footer)
    footer.innerHTML = currentLocation[0] + " " + currentLocation[1] + " " + currentLocation[2] + "°C";