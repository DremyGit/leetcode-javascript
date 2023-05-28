import longestCommonPrefix from './';

describe('14. Longest Common Prefix:', () => {
  test('Example 1', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
  });
  test('Example 2', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
  });
  test('Example 3', () => {
    expect(longestCommonPrefix(['a', 'a', 'a'])).toBe('a');
  });
  test('Example 4', () => {
    expect(longestCommonPrefix([''])).toBe('');
  });
  test('Example 5', () => {
    expect(longestCommonPrefix(['reflower', 'flow', 'flight'])).toBe('');
  });
  test('Example 6', () => {
    expect(longestCommonPrefix(['flower', 'fkow'])).toBe('f');
  });
});
