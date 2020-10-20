import subtractProductAndSum from './';

describe('1281. Subtract the Product and Sum of Digits of an Integer:', () => {
  test('Example 1', () => {
    expect(subtractProductAndSum(234)).toBe(15);
  });
  test('Example 2', () => {
    expect(subtractProductAndSum(4421)).toBe(21);
  });
});
