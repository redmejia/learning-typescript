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

export class Student extends Person {

    school: string;

    constructor(name: string, age: number, school: string) {
        super(name, age);
        this.school = school;
    }

    printSchoolName(): void {
        console.log("School ",this.school);
        
    }

}
// Person
let reynaldo: Person = new Person("Reynaldo", 23);
reynaldo.printName();
console.log("Age ", reynaldo.personAge());

let alice: Person = new Person("Alice", 29);
alice.printName();
console.log("Age ", alice.personAge());

// Student
let maria: Student = new Student("Maria", 25, "xyz school");

console.log("=========");
maria.printName()
console.log("Age ", maria.personAge());
maria.printSchoolName()






