/**
 * Given two binary strings, return their sum (also a binary string).
 * @author Dremy <dremy@dremy.cn>
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  const aLen = a.length;
  const bLen = b.length;

  let res = '';

  // 是否进位
  let carry = 0;

  // 循环按位累加
  for (let i = 0; i <= aLen || i <= bLen; i++) {
    const ax = +a[aLen - i - 1] || 0;
    const bx = +b[bLen - i - 1] || 0;

    let r = ax + bx + carry;

    if (r >= 2) {
      carry = 1;
      r -= 2;
    } else {
      carry = 0;
    }
    res = '' + r + res;
  }
  // 去除无用的 0，注意留下最后一个 0
  return res.replace(/^0+/, '') || '0';
};

export default addBinary;
