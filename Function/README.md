# Function
You can add type annotations to function parameters and return values, providing type safety and making your code more robust.

## Optional and Default Parameters
You can make function parameters optional by adding a ? after their name.
```
    const greet = (name: string, greeting?: string): string => {
        if(greeting) return `${greeting}, ${name}`;
        return `Hello, ${name}`;
    }
    // Default Parameters
    const printName = (name: string = "Reynaldo") : string => {
        return "Hello, " + name;
    }
```

## Function Types
You can also define the type of a function using the arrow function syntax.
```
    type calculatorFunction = (lenght : number, width: number) => number;

    const calculate: calculatorFunction = (lenght, width) => lenght * width;

``` 
In this case, the CalculatorFunction type describes a function that takes two number parameters and returns a number.