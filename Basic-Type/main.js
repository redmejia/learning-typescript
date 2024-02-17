"use strict";
// Basic types
// String
var firstName = "Reynaldo";
var userName = "Alice";
userName = "Sofia";
// Number
var price = 90.10;
var age = 89;
// bolean
var isStudent = false;
isStudent = true;
console.log(firstName);
console.log(userName);
console.log(price);
console.log(age);
console.log(isStudent);
// Compound types
// Array
var numbers = [1, 2, 3, 5];
// tuple
var person = ["Alice", 89];
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
var user;
user = { name: "Alice", age: 78 };
console.log(user);
var userOne = {
    name: "Reynaldo",
    age: 78,
    skills: ["TypeScript", "GoLang", "Reac"]
};
console.log("user one", userOne);
var userDos = {
    name: "Jose",
    age: 45,
};
console.log("user dos", userDos);
