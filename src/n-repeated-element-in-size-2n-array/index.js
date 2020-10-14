/**
 * @param {number[]} A
 * @return {number}
 */
const repeatedNTimes = (a) => {
  const map = {};
  const len = a.length;
  const half = len / 2;
  for (let i = 0; i < len; i++) {
    const n = a[i];
    if (map[n] === half - 1) {
      return n;
    }
    map[n] = (map[n] || 0) + 1;
  }
};

export default repeatedNTimes;
