import { reverseListIterator, reverseListRecursive } from './';
import { makeLinkList } from '../utils';

describe('206. Reverse Linked List', () => {
  [reverseListIterator, reverseListRecursive].forEach((reverseList) => {
    describe(reverseList.name, () => {
      test('Example 1', () => {
        expect(
            reverseList(makeLinkList([1, 2, 3, 4, 5]))
        ).toEqual(makeLinkList([5, 4, 3, 2, 1]));
      });
      test('Example 2', () => {
        expect(
            reverseList(makeLinkList([1, 2]))
        ).toEqual(makeLinkList([2, 1]));
      });
      test('Example 3', () => {
        expect(
            reverseList(makeLinkList([]))
        ).toEqual(makeLinkList([]));
      });
    });
  });
});
