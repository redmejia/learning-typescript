"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.printName = function () {
        console.log("Name ", this.name);
    };
    Person.prototype.personAge = function () {
        return this.age;
    };
    return Person;
}());
exports.Person = Person;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, school) {
        var _this = _super.call(this, name, age) || this;
        _this.school = school;
        return _this;
    }
    Student.prototype.printSchoolName = function () {
        console.log("School ", this.school);
    };
    return Student;
}(Person));
exports.Student = Student;
// Person
var reynaldo = new Person("Reynaldo", 23);
reynaldo.printName();
console.log("Age ", reynaldo.personAge());
var alice = new Person("Alice", 29);
alice.printName();
console.log("Age ", alice.personAge());
// Student
var maria = new Student("Maria", 25, "xyz school");
console.log("=========");
maria.printName();
console.log("Age ", maria.personAge());
maria.printSchoolName();
