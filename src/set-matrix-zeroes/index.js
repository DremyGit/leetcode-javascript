/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
  const m = matrix.length;
  const n = matrix[0].length;
  const iZero = new Set();
  const jZero = new Set();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        iZero.add(i);
        jZero.add(j);
      }
    }
  }
  for (let i = 0; i < m; i++) {
    const zeroRow = iZero.has(i);
    for (let j = 0; j < n; j++) {
      if (zeroRow || jZero.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
};

export default setZeroes;
