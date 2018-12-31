/**
 * Count the number of prime numbers less than a non-negative number, n.
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {
  const primes = [];
  // 从2开始查找所有的质数
  for (let i = 2; i < n; i++) {
    let isPrime = true;
    // 通过已查找到的每一个质数进行筛选
    for (let j = 0, len = primes.length; j < len; j++) {
      const prime = primes[j];
      // 只考虑小于最大质因素的质数
      if (prime * prime > i) {
        break;
      }
      // 找到非质数
      if (i % prime === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      // 将该数append到质数列表
      primes.push(i);
    }
  }
  return primes.length;
};

export default countPrimes;
