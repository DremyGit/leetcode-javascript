/**
 * Initially on a notepad only one character 'A' is present.
 * You can perform two operations on this notepad for each step:
 *
 * 1. Copy All: You can copy all the characters present on the
 * notepad (partial copy is not allowed).
 * 2. Paste: You can paste the characters which are copied last time.
 *
 * Given a number n. You have to get exactly n 'A' on the notepad by
 * performing the minimum number of steps permitted. Output the minimum
 * number of steps to get n 'A'.
 * @author Dremy <dremy@dremy.cn>
 *
 * @param {number} n
 * @return {number}
 */
const minSteps = function(n) {
  if (n === 1) {
    return 0;
  }

  // 分解质因数并求和
  let step = 0;
  for (let i = 2, max = Math.floor(Math.sqrt(n)); i <= max && i < n;) {
    if (n % i === 0) {
      step += i;
      n /= i;
    } else {
      i++;
    }
  }

  // 不要漏掉最后一个
  step += n;

  return step;
};

export default minSteps;
