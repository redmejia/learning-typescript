# Generics

In TypeScript, generics allow you to write code that can work with different types.

Think of generics as placeholders for data types. You define a function, class, or interface with a generic type variable, represented by letters like T, U, or K.

The echo function can only handle numbers, limiting its flexibility.
The echoGeneric function uses a generic type T, allowing it to work with any data type.

```
    const echo = (value: number) : number => {
        return value;
    }

    // function keyword
    // function echoGeneric<T>(value: T): T => {
        return T;
    }

    const echoGeneric = <T>(value: T) : T => {
        return value;
    }

```

## Generic with Arrays

```
    // limited to one type
    const doubleNumbers = (numbers: number[]): number[] => {
        return numbers.map(num => mun * 2);
    }

    // with genrics woks with any type
    const doubleGenric = <T>(items: T[]): T[] => {
        return items.map(item => item);
    }
```
In this case, the doubleNumbers function only works with arrays of numbers, while the doubleGeneric function can work with arrays of any type.