"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    tellMyName() {
        return this.name;
    }
    tellMyAge() {
        return this.age;
    }
}
const person1 = new Person('John', 40);
const person2 = new Person('Mary', 35);
console.log("les personnes enregistrées sont : ");
console.log("name :" + person1.tellMyName() + ", age :" + person1.tellMyAge());
console.log("name :" + person2.tellMyName() + ", age :" + person2.tellMyAge());
