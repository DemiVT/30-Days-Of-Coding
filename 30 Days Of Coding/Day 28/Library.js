// Simple utility library
const MyLibrary = (function() {
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  return {
    add,
    subtract
  };
})();

console.log(MyLibrary.add(5, 3)); // 8
console.log(MyLibrary.subtract(5, 3)); // 2