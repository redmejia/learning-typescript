export class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    printName(): void {
        console.log("Name ", this.name);
    }

    personAge(): number {
        return this.age
    }
}

// Person
let reynaldo: Person = new Person("Reynaldo", 23);
reynaldo.printName();
console.log("Age ", reynaldo.personAge());

let alice: Person = new Person("Alice", 29);
alice.printName();
console.log("Age ", alice.personAge());






