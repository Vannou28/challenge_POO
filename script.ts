class Person {

  private name: string;
  private age: number;


  constructor(name: string, age: number) {
    
    this.name = name;
    this.age = age;
  }

  tellMyName (): string {
    return this.name;
  }

  tellMyAge(): number {
    return this.age;
  }
}

const person1 = new Person('John', 40);
const person2 = new Person('Mary', 35);

console.log("les personnes enregistrées sont : ")
console.log("name :" + person1.tellMyName() + ", age :" + person1.tellMyAge());
console.log("name :" + person2.tellMyName() + ", age :" + person2.tellMyAge());

