import findDisappearedNumbers from './';

test('Example 1', () => {
  expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
});

test('1', () => {
  expect(findDisappearedNumbers([1])).toEqual([]);
});

test('none', () => {
  expect(findDisappearedNumbers([1, 2])).toEqual([]);
});
