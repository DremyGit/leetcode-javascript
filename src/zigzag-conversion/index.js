/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
 * (you may want to display this pattern in a fixed font for better legibility)
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if (numRows === 1) {
    return s;
  }
  const arr = [];
  const len = s.length;
  const base = (numRows - 1) * 2;
  const max = Math.ceil(s.length / base);
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < max; j++) {
      let index = j * base + i;
      if (index < len) {
        arr.push(s[index]);
      }
      if (i !== 0 && i !== numRows - 1) {
        // (i + 1) * base - i
        index += base - 2 * i;
        if (index < len) {
          arr.push(s[index]);
        }
      }
    }
  }
  return arr.join('');
};

export default convert;
