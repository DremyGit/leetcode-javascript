import countPrimes from './';

test('Example 1', () => {
  expect(countPrimes(10)).toBe(4);
});

test('Example 2', () => {
  expect(countPrimes(2)).toBe(0);
});

test('Example 3', () => {
  expect(countPrimes(3)).toBe(1);
});

test('Example 4', () => {
  expect(countPrimes(4)).toBe(2);
});

test('Example 5', () => {
  expect(countPrimes(5)).toBe(2);
});

test('Example 6', () => {
  expect(countPrimes(1e6)).toBe(78498);
});
