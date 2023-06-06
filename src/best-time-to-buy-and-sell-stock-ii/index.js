/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let max = 0;
  for (let i = 0, len = prices.length - 1; i < len; i++) {
    if (prices[i + 1] > prices[i]) {
      max += prices[i + 1] - prices[i];
    }
  }
  return max;
};

export default maxProfit;
