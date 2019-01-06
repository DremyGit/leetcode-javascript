import searchMatrix from './';

test('Example 1', () => {
  expect(searchMatrix([
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50],
  ], 3)).toBe(true);
});

test('Example 2', () => {
  expect(searchMatrix([
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50],
  ], 13)).toBe(false);
});

test('Example 3', () => {
  expect(searchMatrix([
    [1],
  ], 1)).toBe(true);
});

test('Example 4', () => {
  expect(searchMatrix([
    [1, 3],
  ], 3)).toBe(true);
});

test('Example 5', () => {
  expect(searchMatrix([
    [1],
    [3],
  ], 3)).toBe(true);
});

test('Example 6', () => {
  expect(searchMatrix([], 1)).toBe(false);
});
