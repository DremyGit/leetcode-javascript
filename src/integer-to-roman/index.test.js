import intToRoman from './';

describe('12. Integer to Roman:', () => {
  test('Example 1', () => {
    expect(intToRoman(3)).toBe('III');
  });
  test('Example 2', () => {
    expect(intToRoman(58)).toBe('LVIII');
  });
  test('Example 3', () => {
    expect(intToRoman(1994)).toBe('MCMXCIV');
  });
});
