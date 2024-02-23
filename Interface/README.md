# Interface
Interfaces are used to define the structure of object. Think of interfaces as blueprint or contracts that describe their properties and their types an objects should have.

```
    Interface Person {
        name: string;
        age: number;
        isStudent: boolean;
    }
```

## Optional Properties
You can make properties optional by adding a ? after their name in the interface.

```
    Interface Person {
        name: string;
        age?: number;
        isStudent?: boolean;
    }
    // Properties with ? are optional not error when code is compile
    let Sofia: Person = {
        name: "Sofia",
    }
```

## Readonly Properties
You can make properties readonly using readonly keyword.
```
    Interface Person {
        readonly name: string;
        readonly age: number;
        isStudent: boolean;
    }
    
    let robert: Person = {
        name: "Robert",
        age: 34,
        isStudent: true
    }
    // you cannot change properties that were defined readonly
    // robert.name = "Roberto"; ERROR
    // robert.age = 23 ERROR

    
    robert.isStudent = false


```