/**
 * @param {string} s
 * @return {number}
 */
const calculate = (s) => {
  let left1 = '';
  let left2 = '';
  let right = '';
  let operate1 = null;
  let operate2 = null;
  for (let i = 0; i < s.length + 1; i++) {
    if (s[i] === ' ') {
      continue;
    }
    switch (s[i]) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (!operate1) {
          left1 += s[i];
        } else {
          right += s[i];
        }
        break;

      case '+':
      case '-':
      case undefined:
        if (operate2) {
          right = calc(left2, operate2, right);
          left2 = '';
          operate2 = '';
        }
        if (operate1) {
          left1 = calc(left1, operate1, right);
          right = '';
        }
        operate1 = s[i];
        break;

      case '*':
      case '/':
        if (operate2) {
          left2 = calc(left2, operate2, right);
          right = '';
          operate2 = s[i];
        } else if (operate1) {
          if (operate1 === '+' || operate1 === '-') {
            operate2 = s[i];
            left2 = right;
            right = '';
          } else {
            left1 = calc(left1, operate1, right);
            right = '';
            operate1 = s[i];
          }
        } else {
          operate1 = s[i];
        }
        break;
    }
  }
  return left1;
};

/**
 */
function calc(left, operator, right) {
  switch (operator) {
    case '+':
      return Number(left) + Number(right);
    case '-':
      return Number(left) - Number(right);
    case '*':
      return Number(left) * Number(right);
    case '/':
      return Math.floor(Number(left) / Number(right));
  }
}

export default calculate;
