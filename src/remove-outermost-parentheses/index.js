
/**
 * A valid parentheses string is either empty `("")`, `"(" + A + ")"`,
 * or `A + B`, where `A` and `B` are valid parentheses strings,
 * and `+` represents string concatenation.
 *
 * For example, `""`, `"()"`, `"(())()"`, and `"(()(()))"` are all
 * valid parentheses strings.
 *
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = (S) => {
  let count = 0;
  const stringBuilder = [];
  for (let i = 0, len = S.length; i < len; i++) {
    const char = S[i];
    if (char === '(') {
      count++;
      if (count === 1) {
        continue;
      }
    } else {
      count--;
      if (count === 0) {
        continue;
      }
    }
    stringBuilder.push(char);
  }
  return stringBuilder.join('');
};

export default removeOuterParentheses;
