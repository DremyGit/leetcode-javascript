import minNumberOperations from './';

describe('1526. Minimum Number of Increments on Subarrays to Form a Target Array:', () => {
  test('Example 1', () => {
    expect(minNumberOperations([1, 2, 3, 2, 1])).toBe(3);
  });
  test('Example 2', () => {
    expect(minNumberOperations([3, 1, 1, 2])).toBe(4);
  });
  test('Example 3', () => {
    expect(minNumberOperations([3, 1, 5, 4, 2])).toBe(7);
  });
});
