import fib from './';

describe('509. Fibonacci Number:', () => {
  test('Example 1', () => {
    expect(fib(0)).toBe(0);
  });
  test('Example 2', () => {
    expect(fib(1)).toBe(1);
  });
  test('Example 3', () => {
    expect(fib(2)).toBe(1);
  });
  test('Example 4', () => {
    expect(fib(3)).toBe(2);
  });
  test('Example 5', () => {
    expect(fib(4)).toBe(3);
  });
});
