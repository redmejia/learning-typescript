"use strict";
// Without generics (limited to one type)
const echo = (value) => {
    return value;
};
// function keyword
// function echoGeneric<T>(value: T): T {
//     return value;
// }
// With generics (works with any type)
const echoGeneric = (value) => {
    return value;
};
console.log(echo(3));
// console.log(echo("3")); Error
console.log("Echo Generic");
console.log(echoGeneric(45));
console.log(echoGeneric("Hello"));
console.log(echoGeneric({ name: "Reyaldo" }));
// Arrays
// Without generics (limited to one type)
const doubleNumbers = (numbers) => {
    return numbers.map(num => num * 2);
};
// With generics (works with any type)
const doubleNumbersGeneric = (items) => {
    return items.map(item => item);
};
console.log(doubleNumbers([1, 2, 3, 4, 5]));
// console.log(doubleNumbers(["Hola", "Hello"])); Error
console.log(doubleNumbersGeneric([1, 2, 3, 4, 5]));
console.log(doubleNumbersGeneric(["Hola", "Hello"]));
console.log(doubleNumbersGeneric([{ name: "Reynaldo" }, { name: "Alice" }]));
