import removeElement from './';

describe('27. Remove Element:', () => {
  test('Example 1', () => {
    const list = [3, 2, 2, 3];
    const length = removeElement(list, 3);
    expect(list.slice(0, length)).toEqual([2, 2]);
  });
  test('Example 2', () => {
    const list = [0, 1, 2, 2, 3, 0, 4, 2];
    const length = removeElement(list, 2);
    expect(list.slice(0, length)).toEqual([0, 1, 3, 0, 4]);
  });
});
