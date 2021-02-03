import findMedianSortedArrays from './';

describe('4. Median of Two Sorted Arrays:', () => {
  test('Example 1', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  });

  test('Example 2', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });

  test('Example 3', () => {
    expect(findMedianSortedArrays([0, 0], [0, 0])).toBe(0);
  });

  test('Example 4', () => {
    expect(findMedianSortedArrays([], [1])).toBe(1);
  });

  test('Example 5', () => {
    expect(findMedianSortedArrays([2], [])).toBe(2);
  });
  test('Example 6', () => {
    expect(findMedianSortedArrays([100001], [100000])).toBe(100000.5);
  });
  test('Example 7', () => {
    expect(findMedianSortedArrays([1, 2, 3, 4], [])).toBe(2.5);
  });
  test('Example 8', () => {
    expect(findMedianSortedArrays([], [1, 2, 3, 4])).toBe(2.5);
  });
});
