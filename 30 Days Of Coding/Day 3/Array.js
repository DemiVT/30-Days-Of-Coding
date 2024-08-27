// Create and manipulate arrays
let numbers = [1, 2, 3, 4, 5];
numbers.push(6); // Add element
console.log("Array:", numbers);

// Array methods
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

let evens = numbers.filter(num => num % 2 === 0);
console.log("Evens:", evens);

let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);