import plusOne from './';

describe('66. Plus One:', () => {
  test('Example 1', () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });
  test('Example 2', () => {
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
  });
  test('Example 3', () => {
    expect(plusOne([9])).toEqual([1, 0]);
  });
});
