/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = (n) => {
  let product = 1;
  let sum = 0;
  while (n > 0) {
    const last = n % 10;
    product *= last;
    sum += last;
    n = Math.floor(n / 10);
  }
  return product - sum;
};

export default subtractProductAndSum;
