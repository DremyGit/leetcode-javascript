import isRectangleOverlap from './';

describe('836. Rectangle Overlap:', () => {
  test('Example 1', () => {
    expect(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3])).toBe(true);
  });

  test('Example 2', () => {
    expect(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1])).toBe(false);
  });
});
