"use strict";
let personOne = {
    name: "Reynaldo",
    age: 78,
    isStudent: false,
};
personOne.name = "Jose";
personOne.isStudent = true;
console.log(personOne);
let personTwo = {
    name: "Reynaldo",
};
console.log(personTwo);
personTwo.isStudent = true;
console.log(personTwo);
let personThree = {
    name: "Alice",
    age: 34
};
console.log(personThree);
// Cannot assign to 'name' because it is a read-only property ERROR
// personThree.name = "Sofia"
personThree.isStudent = true;
console.log(personThree);
