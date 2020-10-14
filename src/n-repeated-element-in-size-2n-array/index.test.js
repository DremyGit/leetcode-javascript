import repeatedNTimes from './';

describe('961. N-Repeated Element in Size 2N Array:', () => {
  test('Example 1', () => {
    expect(repeatedNTimes([1, 2, 3, 3])).toBe(3);
  });
  test('Example 2', () => {
    expect(repeatedNTimes([2, 1, 2, 5, 3, 2])).toBe(2);
  });
  test('Example 3', () => {
    expect(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])).toBe(5);
  });
});
