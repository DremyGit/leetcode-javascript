import validSquare from './';

test('Example 1', () => {
  const p1 = [0, 0];
  const p2 = [1, 1];
  const p3 = [1, 0];
  const p4 = [0, 1];
  expect(validSquare(p1, p2, p3, p4)).toBe(true);
});


test('Example 1', () => {
  const p1 = [0, 10000];
  const p2 = [10000, 0];
  const p3 = [-10000, 0];
  const p4 = [0, -10000];
  expect(validSquare(p1, p2, p3, p4)).toBe(true);
});

test('Example 1', () => {
  const p1 = [0, -3];
  const p2 = [0, -1];
  const p3 = [0, 1];
  const p4 = [0, 3];
  expect(validSquare(p1, p2, p3, p4)).toBe(false);
});
