// complete this js code
// function Person(name, age) {}

// function Employee(name, age, jobTitle) {}

// // Do not change code below this line


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Employee Class (Inheriting from Person)
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the constructor of the Person class
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}


const person = new Person("Alice", 25);
person.greet();


const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet();

window.Person = Person;
window.Employee = Employee;



