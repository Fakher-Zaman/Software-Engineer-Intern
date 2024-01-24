// DOM Manipulation

// Event Propagation
/*
    Event Propagation have 3 phases:
    1) Event Capturing
    2) Target
    3) Event Bubbling
*/

// "true" for same order:
/*
window.addEventListener("click", function () {
    console.log('Window');
}, true);

document.addEventListener("click", function () {
    console.log('Document');
}, true);

document.querySelector(".div2").addEventListener("click", function () {
    console.log('DIV 2');
}, true);

document.querySelector(".div1").addEventListener("click", function () {
    console.log('DIV 1');
}, true);

document.querySelector("button").addEventListener("click", function (e) {
    console.log(e.target.innerText = "clicked!");
}, true);
*/

// "false" for reverse order:
/* 
window.addEventListener("click", function () {
    console.log('Window');
}, false);

document.addEventListener("click", function () {
    console.log('Document');
}, false);

document.querySelector(".div2").addEventListener("click", function () {
    console.log('DIV 2');
}, false);

document.querySelector(".div1").addEventListener("click", function () {
    console.log('DIV 1');
}, false);

document.querySelector("button").addEventListener("click", function (e) {
    console.log(e.target.innerText = "clicked!");
}, false);
*/

// Stop Propagation
/*
window.addEventListener("click", function () {
    console.log('Window');
}, true);

document.addEventListener("click", function () {
    console.log('Document');
}, true);

document.querySelector(".div2").addEventListener("click", function (e) {
    e.stopPropagation();    // Stop the propagation of events here.
    console.log('DIV 2');
}, true);

document.querySelector(".div1").addEventListener("click", function () {
    console.log('DIV 1');
}, true);

document.querySelector("button").addEventListener("click", function (e) {
    console.log(e.target.innerText = "clicked!");
}, true);
*/

// once: true & e.preventDefault();
window.addEventListener("click", function () {
    console.log('Window');
}, false);

document.addEventListener("click", function () {
    console.log('Document');
}, false);

document.querySelector(".div2").addEventListener("click", function (e) {
    console.log('DIV 2');
}, { once: true });

document.querySelector(".div1").addEventListener("click", function () {
    console.log('DIV 1');
}, false);

document.querySelector(".button").addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.target.innerText = "clicked!");
}, false);