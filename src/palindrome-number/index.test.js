import isPalindrome from './';

describe('9. Palindrome Number:', () => {
  test('Example 1', () => {
    expect(isPalindrome(121)).toBe(true);
  });
  test('Example 2', () => {
    expect(isPalindrome(-121)).toBe(false);
  });
  test('Example 3', () => {
    expect(isPalindrome(10)).toBe(false);
  });
  test('Example 4', () => {
    expect(isPalindrome(-101)).toBe(false);
  });
  test('Example 5', () => {
    expect(isPalindrome(12321)).toBe(true);
  });
});
