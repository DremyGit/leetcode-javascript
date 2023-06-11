/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
  const halfLen = Math.ceil(s.length / 2);
  for (let i = 0; i < halfLen; i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }
};

export default reverseString;
