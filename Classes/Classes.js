"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printName() {
        console.log("Name ", this.name);
    }
    personAge() {
        return this.age;
    }
}
exports.Person = Person;
// Person
let reynaldo = new Person("Reynaldo", 23);
reynaldo.printName();
console.log("Age ", reynaldo.personAge());
let alice = new Person("Alice", 29);
alice.printName();
console.log("Age ", alice.personAge());
