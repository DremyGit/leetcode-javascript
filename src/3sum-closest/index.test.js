import threeSumClosest from './';

describe('16. 3Sum Closest:', () => {
  test('Example 1', () => {
    expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
  });
  test('Example 2', () => {
    expect(threeSumClosest([0, 0, 0], 0)).toBe(0);
  });
  test('Example 3', () => {
    expect(threeSumClosest([-2, -1, -1, 0, 4, 4], 0)).toBe(1);
  });
  test('Example 4', () => {
    expect(threeSumClosest([0, 0, 0], 1)).toBe(0);
  });
});
