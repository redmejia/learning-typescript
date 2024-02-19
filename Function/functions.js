"use strict";
// Function
(function () {
    function calFunc(length, width) {
        return length * width;
    }
    var area = calFunc(5, 8);
    // let inValid: number = calFunc("5", 8)
    console.log(area);
    // Optional and Default Parameters
    var greet = function (name, greeting) {
        if (greeting) {
            return "".concat(greeting, ", ").concat(name);
        }
        else {
            return "Hello, ".concat(name);
        }
    };
    console.log(greet("Sofia"));
    console.log(greet("Alice", "Hola"));
    var printName = function (name) {
        if (name === void 0) { name = "Maria"; }
        return "Hello " + name;
    };
    console.log(printName());
    console.log(printName("Karla"));
    var calculate = function (length, width) { return length * width; };
    console.log(calculate(5, 8));
})();
