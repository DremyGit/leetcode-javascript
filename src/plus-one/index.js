/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  let flag = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + flag === 10) {
      digits[i] = 0;
    } else if (flag) {
      digits[i] = digits[i] + flag;
      flag = 0;
    }
  }
  if (flag === 1) {
    digits.unshift(1);
  }
  return digits;
};

export default plusOne;
