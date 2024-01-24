// DOM Manipulation

// Event Listeners

// -> syntax: element.addEventListener("click", function);

const buttonTwo = document.querySelector('.btn-2');
function alertBtn() {
    alert('I also Love JavaScript');
}
buttonTwo.addEventListener("click", alertBtn);

// Mouseover

const newBackgroundColor = document.querySelector('.box-3');
function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'lightblue';
}
newBackgroundColor.addEventListener("mouseover", changeBgColor);