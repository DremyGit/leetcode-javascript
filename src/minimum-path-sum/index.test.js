import minPathSum from './';

describe('64. Minimum Path Sum:', () => {
  test('Example 1', () => {
    expect(
        minPathSum([
          [1, 3, 1],
          [1, 5, 1],
          [4, 2, 1],
        ])
    ).toBe(7);
  });
  test('Example 2', () => {
    expect(
        minPathSum([
          [1, 2, 3],
          [4, 5, 6],
        ])
    ).toBe(12);
  });
  test('Example 3', () => {
    expect(
        minPathSum([
          [1, 4, 8, 6, 2, 2, 1, 7],
          [4, 7, 3, 1, 4, 5, 5, 1],
          [8, 8, 2, 1, 1, 8, 0, 1],
          [8, 9, 2, 9, 8, 0, 8, 9],
          [5, 7, 5, 7, 1, 8, 5, 5],
          [7, 0, 9, 4, 5, 6, 5, 6],
          [4, 9, 9, 7, 9, 1, 9, 0],
        ])
    ).toBe(47);
  });
  test('Example 4', () => {
    expect(
        minPathSum([[0, 0]])
    ).toBe(0);
  });
});
