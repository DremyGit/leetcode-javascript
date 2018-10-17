/**
 * Write a function that takes an unsigned
 * integer and returns the number of '1' bits it has.
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
  const max = 4294967295;

  // 溢出处理
  n &= max;

  let count = 0;
  while (n !== 0) {
    // 判断末尾是否为1
    if (n & 1 === 1) {
      count++;
    }

    // 使用算数移位，避免首位成为符号位
    n >>>= 1;
  }
  return count;
};

export default hammingWeight;
