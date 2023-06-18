import mergeTwoSortedLists from './';
import { makeLinkList } from '../utils';

describe('21. Merge Two Sorted Lists:', () => {
  test('Example 1', () => {
    expect(mergeTwoSortedLists(makeLinkList([1, 2, 4]), makeLinkList([1, 3, 4]))).toEqual(
        makeLinkList([1, 1, 2, 3, 4, 4])
    );
  });
  test('Example 2', () => {
    expect(mergeTwoSortedLists(makeLinkList([]), makeLinkList([]))).toEqual(
        makeLinkList([])
    );
  });
  test('Example 3', () => {
    expect(mergeTwoSortedLists(makeLinkList([]), makeLinkList([0]))).toEqual(
        makeLinkList([0])
    );
  });
});
