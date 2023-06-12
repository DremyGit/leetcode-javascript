import calculate from './';

describe('227. Basic Calculator II:', () => {
  test('Example 1', () => {
    expect(calculate('3+2*2')).toBe(7);
  });
  test('Example 2', () => {
    expect(calculate(' 3/2 ')).toBe(1);
  });
  test('Example 3', () => {
    expect(calculate(' 3+5 / 2 ')).toBe(5);
  });
  test('Example 4', () => {
    expect(calculate('1+2*3-5/4*3/2+7*8+9+0')).toBe(71);
  });
  test('Example 5', () => {
    expect(calculate('2*3/4')).toBe(1);
  });
});
