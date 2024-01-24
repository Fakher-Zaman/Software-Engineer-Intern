// DOM Manipulation

// Traverse the DOM

// Parent Node Traversal

/*
let ul = document.querySelector('ul');

console.log(ul.childElementCount);
console.log(ul.parentNode);
console.log(ul.parentElement);

console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

const html = document.documentElement;
// console.log(html);
console.log(html.parentNode);
console.log(html.parentElement);
*/

// Child Node Traversal

/*
let ul = document.querySelector('ul');
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes.style.backgroundColor = 'blue';

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
*/

// Siblings Node Traversal

let ul = document.querySelector('ul');
const div = document.querySelector('div');

console.log(div.childNodes);

console.log(ul.previousSibling);
console.log(ul.nextSibling);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);