/**
 * Write a function to find all the 10-letter-long
 * sequences (substrings) that occur more than once
 * in a DNA molecule.
 * @author Dremy <dremy@dremy.cn>
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = (s) => {
  const dnaSequences = {};
  const repeatedDnaSequences = [];

  for (let i = 0, len = s.length - 9; i < len; i++) {
    const substr = s.substr(i, 10);
    const result = dnaSequences[substr];
    if (typeof result === 'undefined') {
      dnaSequences[substr] = false;
    } else if (result === false) {
      repeatedDnaSequences.push(substr);
      dnaSequences[substr] = true;
    }
  }
  return repeatedDnaSequences;
};

export default findRepeatedDnaSequences;
