"use strict";
var personOne = {
    name: "Reynaldo",
    age: 78,
    isStudent: false,
};
personOne.name = "Jose";
personOne.isStudent = true;
console.log(personOne);
var personTwo = {
    name: "Reynaldo",
};
console.log(personTwo);
personTwo.isStudent = true;
console.log(personTwo);
var personThree = {
    name: "Alice",
    age: 34
};
console.log(personThree);
// Cannot assign to 'name' because it is a read-only property ERROR
// personThree.name = "Sofia"
personThree.isStudent = true;
console.log(personThree);
