import reverseString from './';

describe('344. Reverse String:', () => {
  test('Example 1', () => {
    const array = ['h', 'e', 'l', 'l', 'o'];
    reverseString(array);
    expect(array).toEqual(['o', 'l', 'l', 'e', 'h']);
  });
  test('Example 2', () => {
    const array = ['H', 'a', 'c', 'n', 'a', 'h'];
    reverseString(array);
    expect(array).toEqual(['h', 'a', 'n', 'c', 'a', 'H']);
  });
});
