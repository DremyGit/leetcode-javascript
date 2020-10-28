/**
 * You are given an n x n 2D matrix representing an image,
 * rotate the image by 90 degrees (clockwise).
 * You have to rotate the image in-place, which means
 * you have to modify the input 2D matrix directly.
 * DO NOT allocate another 2D matrix and do the rotation.
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
  const len = matrix.length;
  const halfLen = len / 2;
  const offset = halfLen - 0.5;
  for (let i = 0; i < offset; i++) {
    for (let j = 0; j < halfLen; j++) {
      let origin = matrix[i][j];
      const x = i - offset;
      const y = j - offset;
      matrix[i][j] = matrix[-y + offset][x + offset];
      matrix[-y + offset][x + offset] = matrix[-x + offset][-y + offset];
      matrix[-x + offset][-y + offset] = matrix[y + offset][-x + offset];
      matrix[y + offset][-x + offset] = origin;
    }
  }
};

export default rotate;
