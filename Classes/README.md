# Classes
A class is a blueprint or template for creating objects. It defines the properties and methods that all objects of that type will share.
```
class Person {

    constructor() {}

    printName(): void {}

    personAge(): number {}
}
```

The Person class in the explample could have properties (name, age), each annotated with its respective type.

```
class Person {
    // Properties
    name: string;
    age: number;
}
```

The constructor initializes these properties when a new instance of the class is created.

```
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
} 
```
The methods have type annotations for both parameters and the return value.In the example below printName method return void type and personAge return number type.

```
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    // Methods
    printName(): void {
        console.log("Name ", this.name);
    }
    personAge(): number => {
        return this.age;
    }
} 
```