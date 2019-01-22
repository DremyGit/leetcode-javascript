import islandPerimeter from './';

test('Example 1', () => {
  expect(islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])).toBe(16);
});

test('Example 1', () => {
  expect(islandPerimeter([
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [1, 0, 0, 1],
  ])).toBe(24);
});

test('Example 1', () => {
  expect(islandPerimeter([
    [0, 1],
  ])).toBe(4);
});
