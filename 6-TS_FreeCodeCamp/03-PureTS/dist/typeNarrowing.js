"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLocaleLowerCase();
    }
    return val + 4;
}
function provideId(id) {
    if (!id) {
        console.log("No ID provided");
        return;
    }
    id.toLowerCase();
}
