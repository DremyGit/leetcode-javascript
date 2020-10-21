import convert from './';

describe('6. ZigZag Conversion:', () => {
  test('Example 1', () => {
    expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
  });
  test('Example 2', () => {
    expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
  });
  test('Example 2', () => {
    expect(convert('A', 1)).toBe('A');
  });
});
