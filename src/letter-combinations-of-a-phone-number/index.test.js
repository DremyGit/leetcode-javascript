import letterCombinations from './';

describe('17. Letter Combinations of a Phone Number:', () => {
  test('Example 1', () => {
    expect(letterCombinations('23')).toEqual([
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf',
    ]);
  });
  test('Example 2', () => {
    expect(letterCombinations('')).toEqual([]);
  });
  test('Example 3', () => {
    expect(letterCombinations('2')).toEqual(['a', 'b', 'c']);
  });
});
