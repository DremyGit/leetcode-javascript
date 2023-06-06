import getKth from './';

describe('1387. Sort Integers by The Power Value:', () => {
  test('Example 1', () => {
    expect(getKth(12, 15, 2)).toBe(13);
  });
  test('Example 2', () => {
    expect(getKth(7, 11, 4)).toBe(7);
  });
  test('Example 3', () => {
    expect(getKth(12, 15, 1)).toBe(12);
  });
});
