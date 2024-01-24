// DOM Manipulation

// Styling Elements
/* 
const title = document.querySelector('#main-heading');
title.style.color = 'lightblue';
console.log(title);
*/

/*
const listItems = document.querySelectorAll('.list-items');
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '2rem';
}
console.log(listItems);
*/

// Creating Elements
const ul = document.querySelector('ul');
const li = document.createElement('li');

// Adding Elements
ul.append(li);
li.innerHTML = "X-men";

// Modifying the text
/* 
const firstListItem = document.querySelector('#main-heading');

console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);
*/

// Modifying Attributes & Classes
/* 
li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

const title = document.querySelector('#main-heading');

console.log(title.getAttribute('id'));
*/

li.classList.add('list-items');
console.log(li.classList.contains('list-items'));

// Remove Elements
li.remove();