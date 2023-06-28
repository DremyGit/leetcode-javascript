import longestPalindrome from './';

describe('5. Longest Palindromic Substring:', () => {
  test('Example 1', () => {
    expect(longestPalindrome('babad')).toBe('bab');
  });
  test('Example 2', () => {
    expect(longestPalindrome('cbbd')).toBe('bb');
  });
  test('Example 3', () => {
    expect(longestPalindrome('aaa')).toBe('aaa');
  });
  test('Example 4', () => {
    expect(longestPalindrome('baaaac')).toBe('aaaa');
  });
});
