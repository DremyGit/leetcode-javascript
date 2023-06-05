/**
 * @param {number} n
 * @return {number}
 */
const fib = (n, cache = {}) => {
  if (n in cache) {
    return cache[n];
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return (cache[n] = fib(n - 1, cache) + fib(n - 2, cache));
};

export default fib;
