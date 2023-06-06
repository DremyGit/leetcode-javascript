/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
const getKth = (lo, hi, k) => {
  const dp = { 1: 0 };
  const arr = Array.from(Array(hi - lo + 1)).map((_, index) => index + lo);
  return arr.sort((a, b) => getPower(a, dp) - getPower(b, dp))[k - 1];
};

/**
 *
 * @param {number} num
 * @param {object} cache
 * @returns
 */
function getPower(num, cache) {
  if (num in cache) {
    return cache[num];
  }
  return (cache[num] =
    getPower(num % 2 === 0 ? num / 2 : num * 3 + 1, cache) + 1);
}

export default getKth;
