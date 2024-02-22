"use strict";
// Basic types
// String
const firstName = "Reynaldo";
let userName = "Alice";
userName = "Sofia";
// Number
const price = 90.10;
const age = 89;
// bolean
let isStudent = false;
isStudent = true;
console.log(firstName);
console.log(userName);
console.log(price);
console.log(age);
console.log(isStudent);
// Compound types
// Array
let numbers = [1, 2, 3, 5];
// tuple
const person = ["Alice", 89];
// enum
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
})(Color || (Color = {}));
console.log(numbers);
console.log(person);
console.log("Color ", Color.BLUE);
// structal types
// object
let user;
user = { name: "Alice", age: 78 };
console.log(user);
const userOne = {
    name: "Reynaldo",
    age: 78,
    skills: ["TypeScript", "GoLang", "Reac"]
};
console.log("user one", userOne);
const userDos = {
    name: "Jose",
    age: 45,
};
console.log("user dos", userDos);
