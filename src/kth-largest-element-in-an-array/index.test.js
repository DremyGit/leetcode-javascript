import findKthLargest from './';

describe('215. Kth Largest Element in an Array:', () => {
  test('Example 1', () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  });
  test('Example 2', () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
  });
  test('Example 3', () => {
    expect(findKthLargest([2, 1], 2)).toBe(1);
  });
});
