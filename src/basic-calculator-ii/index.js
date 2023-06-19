/**
 * @param {string} s
 * @return {number}
 */
const calculate = (s) => {
  const stack = [];
  let buffer = '';
  let operate = '+';
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === ' ') {
      continue;
    }
    if (['+', '-', '*', '/'].includes(s[i]) || i === s.length) {
      if (operate === '+') {
        stack.push(+buffer);
      } else if (operate === '-') {
        stack.push(-buffer);
      } else if (operate === '*') {
        stack.push(stack.pop() * buffer);
      } else {
        stack.push(Math.trunc(stack.pop() / buffer));
      }
      operate = s[i];
      buffer = '';
    } else {
      buffer += s[i];
    }
  }

  return stack.reduce((total, num) => total + num, 0);
};

export default calculate;
