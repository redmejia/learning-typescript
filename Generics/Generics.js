"use strict";
// Without generics (limited to one type)
// const echo = (value: number): number => {
//     return value;
// }
// // function keyword
// // function echoGeneric<T>(value: T): T {
// //     return value;
// // }
// // With generics (works with any type)
// const echoGeneric = <T>(value: T): T => {
//     return value;
// }
// Without generics (limited to one type)
var doubleNumbers = function (numbers) {
    return numbers.map(function (num) { return num * 2; });
};
// With generics (works with any type)
var doubleGeneric = function (items) {
    return items.map(function (item) { return item; });
};
