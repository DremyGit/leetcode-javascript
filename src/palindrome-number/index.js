/**
 * Determine whether an integer is a palindrome.
 * An integer is a palindrome when it reads the same backward as forward.
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }
  const arr = [];
  while (x > 0) {
    arr.push(x % 10);
    x = Math.floor(x / 10);
  }
  for (let i = 0, len = arr.length, end = len / 2; i < end; i++) {
    if (arr[i] !== arr[len - i - 1]) {
      return false;
    }
  }
  return true;
};

export default isPalindrome;
