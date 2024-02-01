"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Simple User
var user = [1, "Fakher"];
// Tuple User (Order Matters)
var tUser;
// tUser = [true, "Fakher", 1];    // Error  -> Type 'true' is not assignable to type 'number'
tUser = [1, "Fakher", true]; // OK
var rgb = [255, 0, 0];
var newUser = [1, "Fakher", true];
newUser[0] = 2; // OK
console.log(newUser[0]); // 2
