import majorityElement from './';

describe('169. Majority Element:', () => {
  test('Example 1', () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
  });
  test('Example 2', () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });
});
