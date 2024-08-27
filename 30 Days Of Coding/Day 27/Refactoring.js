// Original code
function greetUser(name) {
  console.log("Hello, " + name);
}

// Refactored code
const greetUser = name => console.log(`Hello, ${name}`);

greetUser("Alice");