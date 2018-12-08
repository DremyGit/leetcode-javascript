/**
 * Write an algorithm to determine if a number is "happy".
 * @author Dremy <dremy@dremy.cn>
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n, loopedCache = {}) {
  // 计算平方和
  const result = n.toString().split('').reduce(((sum, m) => sum + m * m), 0);

  if (result === 1) {
    return true;
  }

  // 根据结果判断是否已进入循环
  if (loopedCache[result] === true) {
    return false;
  }

  // 将结果存储
  loopedCache[result] = true;
  return isHappy(result, loopedCache);
};

export default isHappy;
