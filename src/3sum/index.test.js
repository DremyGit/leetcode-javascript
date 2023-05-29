import threeSum from './';

describe('15. 3Sum:', () => {
  test('Example 1', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });
  test('Example 2', () => {
    expect(threeSum([0, 1, 1])).toEqual([]);
  });
  test('Example 3', () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });
  test('Example 4', () => {
    expect(threeSum([0, 0])).toEqual([]);
  });
  test('Example 5', () => {
    expect(threeSum([-2, -1, -1, 0, 4, 4])).toEqual([]);
  });
});
