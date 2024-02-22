"use strict";
// Function
(() => {
    function calFunc(length, width) {
        return length * width;
    }
    let area = calFunc(5, 8);
    // let inValid: number = calFunc("5", 8)
    console.log(area);
    // Optional and Default Parameters
    const greet = (name, greeting) => {
        if (greeting) {
            return `${greeting}, ${name}`;
        }
        else {
            return `Hello, ${name}`;
        }
    };
    console.log(greet("Sofia"));
    console.log(greet("Alice", "Hola"));
    const printName = (name = "Maria") => {
        return "Hello " + name;
    };
    console.log(printName());
    console.log(printName("Karla"));
    const calculate = (length, width) => length * width;
    console.log(calculate(5, 8));
})();
