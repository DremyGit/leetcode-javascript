/**
 * Write an efficient algorithm that searches for a value in an m x n matrix.
 * @author Dremy <dremy@dremy.cn>
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  let i = matrix.length;
  while (i--) {
    if (target >= matrix[i][0]) {
      let j = matrix[i].length;
      while (j--) {
        if (target === matrix[i][j]) {
          return true;
        }
      }
      return false;
    }
  }
  return false;
};

export default searchMatrix;
