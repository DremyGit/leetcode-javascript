/**
 * Given an input string, reverse the string word by word.
 */
/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
  return s
      .trim()
      .split(/\s+/)
      .reverse()
      .join(' ');
};

export default reverseWords;
