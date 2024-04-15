function PrintMessage(message) {
    console.log(message);
}

function AppendStrings(string1, string2) {
    return string1 + string2;
}

var welcomeMsg = "Welcome to ";
var siteName = "JavaScript Debugger";

var msg = AppendStrings(welcomeMsg, siteName);

PrintMessage(msg);

var i = 0;
window.onload = function () {
    document.getElementById('btnChangeText').onclick = function () {
        document.getElementById('spnText').innerHTML = i++;
    }
}