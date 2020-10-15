import rob from './';

describe('198. House Robber:', () => {
  test('Example 1', () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
  });
  test('Example 2', () => {
    expect(rob([2, 7, 9, 3, 1])).toBe(12);
  });
  test('Example 3', () => {
    expect(rob([0, 0, 0, 0, 0])).toBe(0);
  });
});
