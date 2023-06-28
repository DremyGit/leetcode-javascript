const longestPalindrome = (s) => {
  let substring = s[0];
  for (let i = 0; i < s.length; i++) {
    let left = i;
    while (left >= 0 && s[left] === s[i]) {
      left--;
    }
    let right = i;
    while (right < s.length && s[right] === s[i]) {
      right++;
    }
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    if (right - left - 1 > substring.length) {
      substring = s.substring(left + 1, right);
    }
  }
  return substring;
};

export default longestPalindrome;
