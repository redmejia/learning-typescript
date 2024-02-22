// Basic types
// String
const firstName: string = "Reynaldo";
let userName: string = "Alice";
userName = "Sofia";

// Number
const price: number = 90.10;
const age: number = 89;

// bolean
let isStudent: boolean = false
isStudent = true

console.log(firstName);
console.log(userName);
console.log(price);
console.log(age);
console.log(isStudent);




// Compound types
// Array
let numbers: number[] = [1, 2, 3, 5];

// tuple
const person: [string, number] = ["Alice", 89];

// enum
enum Color {
    RED,
    BLUE,
}

console.log(numbers);
console.log(person);
console.log("Color ",Color.BLUE);



// structal types
// object
let user: {name: string, age: number}
user = {name:"Alice", age: 78};

console.log(user);




// interface
interface User {
    name: string;
    age: number;
    skills?: string[]; 
}

const userOne: User = {
    name: "Reynaldo",
    age: 78,
    skills: ["TypeScript", "GoLang", "Reac"]
}

console.log("user one", userOne);


const userDos: User = {
    name: "Jose",
    age: 45,
}

console.log("user dos", userDos);