// DOM Manipulation

// Event Delegation

// It allows users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descendants that match a selector.

/*
document.querySelector('#football').addEventListener("click", function (e) {
    console.log('Football is clicked!');
    const target = e.target;
    if (target.matches('li')) {
        target.style.backgroundColor = "rgb(126, 114, 216)";
    }
});

document.querySelector('#basketball').addEventListener("click", function (e) {
    console.log('Basketball is clicked!');
    const target = e.target;
    if (target.matches('li')) {
        target.style.backgroundColor = "rgb(126, 114, 216)";
    }
});

document.querySelector('#boxing').addEventListener("click", function (e) {
    console.log('Boxing is clicked!');
    const target = e.target;
    if (target.matches('li')) {
        target.style.backgroundColor = "rgb(126, 114, 216)";
    }
});

document.querySelector('#tennis').addEventListener("click", function (e) {
    console.log('Tennis is clicked!');
    const target = e.target;
    if (target.matches('li')) {
        target.style.backgroundColor = "rgb(126, 114, 216)";
    }
});

document.querySelector('#golf').addEventListener("click", function (e) {
    console.log('Golf is clicked!');
    const target = e.target;
    if (target.matches('li')) {
        target.style.backgroundColor = "rgb(126, 114, 216)";
    }
});
*/

// In shorter way to perform this task.
document.querySelector("#sports").addEventListener('click', function (e) {
    console.log(e.target.getAttribute('id') + ' is clicked!');
    const target = e.target;
    if (target.matches('li')) {
        target.style.backgroundColor = "rgb(126, 114, 216)";
    }
})

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerHTML = 'rugby';
newSport.setAttribute('id', 'rugby');
sports.appendChild(newSport);