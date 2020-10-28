import rotate from './';

describe('48. Rotate Image:', () => {
  test('Example 1', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    rotate(matrix);
    expect(matrix).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });
  test('Example 2', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    rotate(matrix);
    expect(matrix).toEqual([
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4],
    ]);
  });
  test('Example 3', () => {
    const matrix = [[1]];
    rotate(matrix);
    expect(matrix).toEqual([[1]]);
  });
  test('Example 4', () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    rotate(matrix);
    expect(matrix).toEqual([
      [3, 1],
      [4, 2],
    ]);
  });
});
