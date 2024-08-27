// Prototype example
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return `Hello, my name is ${this.name}`;
};

let john = new Person("John");
console.log(john.greet());