"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.Person = void 0;
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
class Student extends Person {
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }
    printSchoolName() {
        console.log("School ", this.school);
    }
}
exports.Student = Student;
// Person
let reynaldo = new Person("Reynaldo", 23);
reynaldo.printName();
console.log("Age ", reynaldo.personAge());
let alice = new Person("Alice", 29);
alice.printName();
console.log("Age ", alice.personAge());
// Student 
let maria = new Student("Maria", 28, "zyx school");
console.log("======");
maria.printName();
console.log("Age ", maria.personAge());
maria.printSchoolName();
