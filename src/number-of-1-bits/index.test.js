import numberOf1Bits from './';

test('Example 1', () => {
  expect(numberOf1Bits(11)).toBe(3);
});

test('Example 2', () => {
  expect(numberOf1Bits(128)).toBe(1);
});

test('overflow', () => {
  expect(numberOf1Bits(Math.pow(2, 32) - 1)).toBe(32);
  expect(numberOf1Bits(Math.pow(2, 32))).toBe(0);
});
