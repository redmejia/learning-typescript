# Inheritance

Inheritance refers to the ability to create a new class (sub/child class) that inherits properties and methods from an existing class (super/parent class). This is a fundamental concept in object-oriented programming (OOP) and allows for code reuse and organization.

``` 
    // Super/Parent class
    class Person {
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

    // Sub/Child class
    class Student extends Person {
        
        school: string;

        constructor(name: string, age: number, school: string) {
            this.name = name;
            this.age = age;
            this.school = school;
        }

        printSchoolName(): void {
            console.log("Name ", this.name);
        }
    }

    // Create instance of Person and Student class

    let reynaldo: Person = new Person("Reynaldo", 21);
    reynaldo.printName();

    let karla: Student = new Student("Karla", 34, "XYZ School");
    karla.printName();
    karla.printSchoolName();
    console.log(karla.personAge());

```