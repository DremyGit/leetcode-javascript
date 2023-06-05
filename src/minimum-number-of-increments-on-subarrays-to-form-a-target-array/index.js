/**
 * @param {number[]} target
 * @return {number}
 */
const minNumberOperations = (target) => {
  let total = target[0];
  for (let i = 1, len = target.length; i < len; i++) {
    if (target[i] > target[i - 1]) {
      total += target[i] - target[i - 1];
    }
  }
  return total;
};

export default minNumberOperations;
