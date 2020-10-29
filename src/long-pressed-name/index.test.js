import isLongPressedName from './';

describe('925. Long Pressed Name:', () => {
  test('Example 1', () => {
    expect(isLongPressedName('alex', 'aaleex')).toBe(true);
  });

  test('Example 2', () => {
    expect(isLongPressedName('saeed', 'ssaaedd')).toBe(false);
  });

  test('Example 3', () => {
    expect(isLongPressedName('leelee', 'lleeelee')).toBe(true);
  });

  test('Example 4', () => {
    expect(isLongPressedName('laiden', 'laiden')).toBe(true);
  });

  test('Example 5', () => {
    expect(isLongPressedName('abc', 'abcc')).toBe(true);
  });

  test('Example 6', () => {
    expect(isLongPressedName('abcd', 'abcdde')).toBe(false);
  });

  test('Example 7', () => {
    expect(isLongPressedName('alex', 'aaleelx')).toBe(false);
  });

  test('Example 8', () => {
    expect(isLongPressedName('zlexya', 'aazlllllllllllllleexxxxxxxxxxxxxxxya')).toBe(false);
  });

  test('Example 9', () => {
    expect(isLongPressedName('pyplrz', 'ppyypllr')).toBe(false);
  });

  test('Example 10', () => {
    expect(isLongPressedName('abcdefg', 'abcdf')).toBe(false);
  });
});
