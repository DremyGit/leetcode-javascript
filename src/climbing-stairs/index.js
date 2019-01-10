/**
 * 可使用带cache的斐波那契数列求解
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  if (n === 1 || n === 2) {
    return n;
  }
  if (!cache[n]) {
    cache[n] = climbStairs(n - 2) + climbStairs(n - 1);
  }
  return cache[n];
};

const cache = {};

export default climbStairs;
