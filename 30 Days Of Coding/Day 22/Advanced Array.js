// Advanced Array Methods
const numbers = [1, 2, 3, 4, 5];

const found = numbers.find(num => num > 3);
console.log("Found:", found);

const someGreaterThanThree = numbers.some(num => num > 3);
console.log("Some greater than 3:", someGreaterThanThree);

const allGreaterThanZero = numbers.every(num => num > 0);
console.log("All greater than 0:", allGreaterThanZero);

const flattened = [1, [2, 3], [4, [5]]].flat(2);
console.log("Flattened:", flattened);
