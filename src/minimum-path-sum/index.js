/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = (grid, i = 0, j = 0, cache = []) => {
  if (!cache[i]) {
    cache[i] = [];
  }
  if (cache[i][j] !== undefined) {
    return cache[i][j];
  }

  const iLen = grid.length - i;
  const jLen = grid[0].length - j;
  if (iLen === 1 && jLen === 1) {
    cache[i][j] = grid[i][j];
  } else if (iLen === 1) {
    cache[i][j] = grid[i][j] + minPathSum(grid, i, j + 1, cache);
  } else if (jLen === 1) {
    cache[i][j] = grid[i][j] + minPathSum(grid, i + 1, j, cache);
  } else {
    cache[i][j] =
      grid[i][j] + Math.min(minPathSum(grid, i, j + 1, cache), minPathSum(grid, i + 1, j, cache));
  }
  return cache[i][j];
};


export default minPathSum;
