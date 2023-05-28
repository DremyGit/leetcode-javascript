/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  const minLen = Math.min(...strs.map(({ length }) => length));
  for (let i = 0; i < minLen; i++) {
    const commonChar = strs[0][i];
    if (!strs.every((str) => str[i] === commonChar)) {
      return strs[0].substring(0, i);
    }
  }
  return strs[0].substring(0, minLen);
};
export default longestCommonPrefix;
