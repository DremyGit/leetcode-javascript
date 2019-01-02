import getSkyline from './';

test('Example 1', () => {
  expect(
      getSkyline([
        [2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8],
      ])
  ).toEqual([[2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0]]);
});

test('Example 2', () => {
  expect(
      getSkyline([[2, 9, 10], [3, 7, 15], [15, 20, 10], [19, 24, 8]])
  ).toEqual([[2, 10], [3, 15], [7, 10], [9, 0], [15, 10], [20, 8], [24, 0]]);
});

test('Example 3', () => {
  expect(getSkyline([[2, 9, 10], [9, 12, 15]])).toEqual([
    [2, 10],
    [9, 15],
    [12, 0],
  ]);
});

test('Example 4', () => {
  expect(getSkyline([])).toEqual([]);
});

test('Example 5', () => {
  expect(getSkyline([[1, 2, 1], [1, 2, 2], [1, 2, 3]])).toEqual([
    [1, 3],
    [2, 0],
  ]);
});

test('Example 6', () => {
  expect(getSkyline([[2, 4, 7], [2, 4, 5], [2, 4, 6]])).toEqual([
    [2, 7],
    [4, 0],
  ]);
});

test('Example 7', () => {
  expect(getSkyline([[2, 4, 6], [2, 4, 5], [2, 4, 7]])).toEqual([
    [2, 7],
    [4, 0],
  ]);
});
