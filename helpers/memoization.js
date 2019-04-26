// memoization of pure functions
// creates local cache using closure, storing function arguments as keys in cache.
// returns value from object if cached or calls function with args array (apply method)
// example use: 
// const add = (a, b) => a + b;
// const memoAdd = memoization(add);
// memoAdd(3, 4);
// memoAdd(3, 4);

const memoization = fn => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    } else {
      const value = fn.apply(null, args);
      cache[key] = value;
      return value;
    }
  }
};

export default memoization;
