







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
const doubleNumbers = (numbers: number[]): number[] => {
    return numbers.map(num => num * 2);
}
// With generics (works with any type)
const doubleGeneric = <T>(items: T[]): T[] =>{
    return items.map(item => item);
}








