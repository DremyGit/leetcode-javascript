import reverseWords from './';

describe('151. Reverse Words in a String:', () => {
  test('Example 1', () => {
    expect(reverseWords('the sky is blue')).toBe('blue is sky the');
  });
  test('Example 2', () => {
    expect(reverseWords('  hello world!  ')).toBe('world! hello');
  });
  test('Example 1', () => {
    expect(reverseWords('a good   example')).toBe('example good a');
  });
});
