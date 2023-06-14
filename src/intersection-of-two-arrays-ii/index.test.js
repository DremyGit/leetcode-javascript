import intersectionOfTwoArraysII from './';

describe('350. Intersection of Two Arrays II:', () => {
  test('Example 1', () => {
    expect(intersectionOfTwoArraysII([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
  });
  test('Example 2', () => {
    expect(intersectionOfTwoArraysII([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9]);
  });
});
