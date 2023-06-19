/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  let cnt = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        cnt++;
        dfs(grid, i, j);
      }
    }
  }
  return cnt;
};

// eslint-disable-next-line require-jsdoc
function dfs(grid, i, j) {
  if (!grid[i] || !grid[i][j] || grid[i][j] === '0') {
    return;
  }
  grid[i][j] = '0';

  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);
  dfs(grid, i - 1, j);
  dfs(grid, i + 1, j);
}

export default numIslands;
