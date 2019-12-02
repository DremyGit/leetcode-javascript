import complexNumberMultiply from './';

describe('537. Complex Number Multiplication:', () => {
  test('Example 1', () => {
    expect(complexNumberMultiply('1+1i', '1+1i')).toBe('0+2i');
  });

  test('Example 2', () => {
    expect(complexNumberMultiply('1+-1i', '1+-1i')).toBe('0+-2i');
  });
});
