# TypeScript Types 

When you declare a variable, you can also specify its type. This helps TypeScript catch and prevent type mismatches during development.

## Basics Types
string: Represents sequences of text characters.
```
    let name: string = "Alice";
    name = 34 // error variable was defined to store string type

    const midName: string = 'R';

    let header: string = `
        <header>
          <h1>TypeScript</h1>
        </header>
        <main>
          <h1>Learn TypeScript Basics</h1>
          <h2>Welcome, Reynaldo!</h2>
          <p> Hello, Mundo 🌎 </p>
        </main>
    `;

```
number: Represents floating-point and integer numbers.
```
    let price: number = 53.89;
    let age: number = 54;
    // if you try to change the type it will give an error
    age = "78"; // ERROR
```

boolean: Represents true or false values.
```
    let isActive: boolean = false;
    let isStudent: boolean = true;
```

## Compound Types
array: Represents an ordered collection of values of the same type.
```
    let numbers: number[] = [1,2,3,4,5];
    let names: string[] = ["Alice", "Lina", "Karla", "Reynaldo","John"];
```


tuple: Represents an ordered collection of values of specific types and fixed length.
```
    let person: [string, number] = ["Alice", 32];
```

enum: Represents a set of named constants.
```
    enum Color {
        RED,
        BLUE,
        GREEN,
    }
    enum SIZE {
        XS,
        SMALL,
        MED,
    }
```

object: Represents unordered collections of key-value pairs.
```
    {name: "Lina", age: 21, isStudent?: true};
```


interface: Defines the shape of an object, specifying required and optional properties with their types.
```
    interface Person {
        name: string;
        age: number;
        isStudent?: boolean
    }

    let reynaldo: Person = {
        name: "Reynaldo",
        age: 23,
    }

```

