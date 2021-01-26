import lengthOfLongestSubstring from './';

describe('3. Longest Substring Without Repeating Characters:', () => {
  test('Example 1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  test('Example 2', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  test('Example 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  test('Example 4', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  test('Example 5', () => {
    expect(lengthOfLongestSubstring('abcbdef')).toBe(5);
  });

  test('Example 6', () => {
    expect(lengthOfLongestSubstring('aabaab!bb')).toBe(3);
  });
});
