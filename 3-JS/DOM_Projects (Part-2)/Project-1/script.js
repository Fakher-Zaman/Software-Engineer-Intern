// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        "quote": "Be yourself; everyone else is already taken.",
        "person": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Inspirational",
            "Advice",
            "Humor"
        ]
    },
    {
        "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
        "person": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "Humor"
        ]
    },
    {
        "quote": "True friends stab you in the front.",
        "person": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "People"
        ]
    },
    {
        "quote": "Women are made to be Loved, not understood.",
        "person": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "Humor"
        ]
    },
    {
        "quote": "Be the change that you wish to see in the world.",
        "person": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
            "Inspirational",
            "Philosophy",
            "Advice"
        ]
    },
    {
        "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "person": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
            "Inspirational",
            "Life",
            "Advice"
        ]
    },
    {
        "quote": "No one can make you feel inferior without your consent.",
        "person": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom"
        ]
    },
    {
        "quote": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        "person": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom",
            "People"
        ]
    },
    {
        "quote": "Do what you feel in your heart to be right - for you'll be criticized anyway.",
        "person": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom",
            "Advice"
        ]
    },
    {
        "quote": "Do one thing every day that scares you.",
        "person": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom",
            "Life"
        ]
    },
    {
        "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
        "person": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Wisdom",
            "Love"
        ]
    },
    {
        "quote": "Our lives begin to end the day we become silent about things that matter.",
        "person": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Life"
        ]
    },
    {
        "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "person": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "People",
            "Life"
        ]
    },
    {
        "quote": "Injustice anywhere is a threat to justice everywhere.",
        "person": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Wisdom"
        ]
    },
    {
        "quote": "The time is always right to do what is right.",
        "person": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "Life's most persistent and urgent question is, 'What are you doing for others?",
        "person": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Life",
            "People"
        ]
    },
];

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});