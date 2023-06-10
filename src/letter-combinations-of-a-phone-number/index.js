/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  if (digits.length === 0) {
    return [];
  }
  if (digits in map) {
    return map[digits];
  }
  const res = [];
  const restRes = letterCombinations(digits.substring(1));
  for (let i = 0; i < map[digits[0]].length; i++) {
    for (let j = 0; j < restRes.length; j++) {
      res.push(`${map[digits[0]][i]}${restRes[j]}`);
    }
  }
  return res;
};
const map = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

export default letterCombinations;
