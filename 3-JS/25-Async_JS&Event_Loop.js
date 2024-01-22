console.log("Start");

setTimeout(function cbT() {
    console.log("CB SetTimeout");
}, 5000);

fetch("https://www.w3schools.com/js/js_versions.asp")
    .then(function cbF() {
        console.log("CB Netflix");
    });

console.log("End");