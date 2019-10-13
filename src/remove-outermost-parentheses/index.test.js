import removeOuterParentheses from './';

describe('1021. Remove Outermost Parentheses:', () => {
  test('Example 1', () => {
    expect(removeOuterParentheses('(()())(())')).toBe('()()()');
  });
  test('Example 2', () => {
    expect(removeOuterParentheses('(()())(())(()(())')).toBe('()()()()(())');
  });
  test('Example 3', () => {
    expect(removeOuterParentheses('()()')).toBe('');
  });
});
