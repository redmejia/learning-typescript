// Interface
// I change from Person to Persona because confict with Classes tutorial
// CHANGE BACK TO DEFAULT IF NEED NEW TUTORIAL.
interface Persona {
    name: string;
    age: number;
    isStudent: boolean;
}

let personOne: Persona = {
    name: "Reynaldo",
    age: 78,
    isStudent: false,
}

personOne.name = "Jose"
personOne.isStudent = true

console.log(personOne);

// Optional Properties
interface OptionalPersonInformation {
    name: string;
    age?: number;
    isStudent?: boolean;
}

let personTwo: OptionalPersonInformation = {
    name: "Reynaldo",
}


console.log(personTwo);

personTwo.isStudent = true

console.log(personTwo);



// Read only properties
interface ReadOnlyPersonInformation {
    readonly name: string;
    age: number;
    isStudent?: boolean;
}

let personThree: ReadOnlyPersonInformation = {
    name: "Alice",
    age: 34
}

console.log(personThree);
// Cannot assign to 'name' because it is a read-only property ERROR
// personThree.name = "Sofia"
personThree.isStudent = true
console.log(personThree);

