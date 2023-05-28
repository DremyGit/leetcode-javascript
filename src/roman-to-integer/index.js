/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const relateMap = {
    V: 'I',
    X: 'I',
    L: 'X',
    C: 'X',
    D: 'C',
    M: 'C',
  };
  let num = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    const char = s[i];
    if (['I', 'X', 'C'].includes(char) && i + 1 && relateMap[s[i + 1]] === char) {
      num -= map[char];
    } else {
      num += map[char];
    }
  }
  return num;
};

export default romanToInt;
