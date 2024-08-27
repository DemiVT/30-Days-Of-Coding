// Singleton Pattern
const Singleton = (function() {
  let instance;

  function createInstance() {
    return { value: Math.random() };
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true
