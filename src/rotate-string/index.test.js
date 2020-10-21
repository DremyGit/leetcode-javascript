import rotateString from './';

describe('796. Rotate String:', () => {
  test('Example 1', () => {
    expect(rotateString('abcde', 'cdeab')).toBe(true);
  });
  test('Example 2', () => {
    expect(rotateString('abcde', 'abced')).toBe(false);
  });
  test('Example 3', () => {
    expect(rotateString('abcde', 'cde')).toBe(false);
  });
});
