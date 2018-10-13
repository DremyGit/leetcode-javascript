/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 * @author Dremy <dremy@dremy.cn>
 *
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  const max = 2147483647;
  const min = -2147483648;

  // 溢出判断
  if (x > max || x < min) {
    return 0;
  }

  let result = 0;

  while (x !== 0) {
    // 累加末尾数
    result = result * 10 + (x % 10);
    // 进行整除
    x = x < 0 ? Math.ceil(x / 10) : Math.floor(x / 10);
  }

  // 溢出判断
  if (result > max || result < min) {
    return 0;
  }

  return result;
};

export default reverse;
