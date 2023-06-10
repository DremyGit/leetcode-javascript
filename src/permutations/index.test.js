import permute from './';

describe('46. Permutations:', () => {
  test('Example 1', () => {
    expect(permute([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });
  test('Example 2', () => {
    expect(permute([0, 1])).toEqual([
      [0, 1],
      [1, 0],
    ]);
  });
  test('Example 3', () => {
    expect(permute([1])).toEqual([
      [1],
    ]);
  });
  test('Example 4', () => {
    expect(permute([])).toEqual([]);
  });
});
