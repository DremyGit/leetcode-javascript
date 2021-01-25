import addTwoNumbers from './';
import { makeLinkList } from '../utils';

describe('2. Add Two Numbers:', () => {
  test('Example 1', () => {
    expect(
        addTwoNumbers(makeLinkList([2, 4, 3]), makeLinkList([5, 6, 4]))
    ).toEqual(makeLinkList([7, 0, 8]));
  });

  test('Example 2', () => {
    expect(
        addTwoNumbers(makeLinkList([0]), makeLinkList([0]))
    ).toEqual(makeLinkList([0]));
  });

  test('Example 3', () => {
    expect(
        addTwoNumbers(
            makeLinkList([9, 9, 9, 9, 9, 9, 9]),
            makeLinkList([9, 9, 9, 9])
        )
    ).toEqual(makeLinkList([8, 9, 9, 9, 0, 0, 0, 1]));
  });
});
