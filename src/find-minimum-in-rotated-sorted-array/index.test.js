import findMin from './';

describe('153. Find Minimum in Rotated Sorted Array:', () => {
  test('Example 1', () => {
    expect(findMin([3, 4, 5, 1, 2])).toBe(1);
  });
  test('Example 1', () => {
    expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
  });
  test('Example 1', () => {
    expect(findMin([11, 13, 15, 17])).toBe(11);
  });
});
