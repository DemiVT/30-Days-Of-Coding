// Define an object
let person = {
  name: "John",
  age: 30,
  greet() {
    return `Hello, my name is ${this.name}`;
  }
};

// Access properties
console.log(person.name);
console.log(person.greet());

// Object destructuring
const { name, age } = person;
console.log("Name:", name);
console.log("Age:", age);