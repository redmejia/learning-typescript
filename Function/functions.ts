// Function
(() => {


    function calFunc(length: number, width: number): number {
        return length * width
    }

    let area: number = calFunc(5, 8);
    // let inValid: number = calFunc("5", 8)
    console.log(area);


    // Optional and Default Parameters
    const greet = (name: string, greeting?: string): string => {
        if (greeting) {
            return `${greeting}, ${name}`
        } else {
            return `Hello, ${name}`
        }
    }

    console.log(greet("Sofia"));
    console.log(greet("Alice", "Hola"));

    const printName = (name: string = "Maria"): string => {
        return "Hello " + name
    }

    console.log(printName());
    console.log(printName("Karla"));



    // Function Types
    type calFuncDos = (length: number, width: number) => number

    const calculate: calFuncDos = (length, width) => length * width

    console.log(calculate(5, 8));
    

})()







