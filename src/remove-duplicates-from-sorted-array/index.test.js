import removeDuplicates from './';

describe('26. Remove Duplicates from Sorted Array:', () => {
  test('Example 1', () => {
    const array = [1, 1, 2];
    expect(removeDuplicates(array)).toEqual(2);
    expect(array).toEqual([1, 2]);
  });
  test('Example 2', () => {
    const array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    expect(removeDuplicates(array)).toEqual(5);
    expect(array).toEqual([0, 1, 2, 3, 4]);
  });
  test('Example 3', () => {
    const array = [1, 1, 2, 3, 3];
    expect(removeDuplicates(array)).toEqual(3);
    expect(array).toEqual([1, 2, 3]);
  });
});
