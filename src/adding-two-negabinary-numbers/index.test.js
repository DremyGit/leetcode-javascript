import addNegabinary from './';

describe('1073. Adding Two Negabinary Numbers:', () => {
  test('Example 1', () => {
    expect(addNegabinary([1, 1, 1, 1, 1], [1, 0, 1])).toEqual([1, 0, 0, 0, 0]);
  });
  test('Example 2', () => {
    expect(addNegabinary([0], [0])).toEqual([0]);
  });
  test('Example 3', () => {
    expect(addNegabinary([0], [1])).toEqual([1]);
  });
  test('Example 4', () => {
    expect(addNegabinary([1], [1])).toEqual([1, 1, 0]);
  });
  test('Example 5', () => {
    expect(addNegabinary([1, 0, 1], [1])).toEqual([1, 1, 0, 1, 0]);
  });
  test('Example 6', () => {
    expect(addNegabinary([1, 1, 1, 1], [1, 0, 1])).toEqual([0]);
  });
  test('Example 7', () => {
    expect(addNegabinary([1, 0, 1], [1, 0, 1])).toEqual([1, 1, 1, 1, 0]);
  });
  test('Example 7', () => {
    expect(addNegabinary([1, 0, 1], [1, 0, 1])).toEqual([1, 1, 1, 1, 0]);
  });
});
