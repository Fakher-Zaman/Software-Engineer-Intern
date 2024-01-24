// DOM Manipulation

// 1 - GetElementById()
const title = document.getElementById('main-heading');
console.log(title);
console.log(title.textContent);

// 2 - GetElementByClassName()
const listItem = document.getElementsByClassName('list-items');
console.log(listItem);

// 3 - getElementsByTagName()
const listItems = document.getElementsByTagName('li');
console.log(listItems);

// 4 - querySelector()
const container1 = document.querySelector('div');
console.log(container1);

// 5 - querySelectorAll()
const container = document.querySelectorAll('div');
console.log(container);