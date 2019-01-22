/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = (grid) => {
  let perimeter = 0;
  let ilen = grid.length;
  let jlen = grid[0] && grid[0].length;

  for (let i = 0; i < ilen; i++) {
    for (let j = 0; j < jlen; j++) {
      if (grid[i][j] !== 1) {
        continue;
      }

      let neighbour = 0;
      if (i > 0 && grid[i - 1][j] === 1) {
        neighbour++;
      }
      if (i < ilen - 1 && grid[i + 1][j] === 1) {
        neighbour++;
      }
      if (grid[i][j - 1] === 1) {
        neighbour++;
      }
      if (grid[i][j + 1] === 1) {
        neighbour++;
      }
      perimeter += 4 - neighbour;
    }
  }
  return perimeter;
};

export default islandPerimeter;
