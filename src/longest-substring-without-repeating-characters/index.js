/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  const len = s.length;
  let max = 0;
  let headerIndex = 0;
  const set = new Set();
  for (let i = 0; i < len; i++) {
    const c = s[i];
    if (set.has(c)) {
      max = Math.max(max, set.size);
      for (let j = headerIndex; j < i; j++) {
        if (len - headerIndex <= max) {
          return max;
        }
        headerIndex++;
        if (s[j] === c) {
          break;
        }
        set.delete(s[j]);
      }
    } else {
      set.add(c);
    }
  }
  max = Math.max(max, set.size);
  return max;
};

export default lengthOfLongestSubstring;
