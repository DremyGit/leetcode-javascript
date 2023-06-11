import oddEvenList from './';
import { makeLinkList } from '../utils';

describe('328. Odd Even Linked List:', () => {
  test('Example 1', () => {
    expect(oddEvenList(makeLinkList([1, 2, 3, 4, 5]))).toEqual(
        makeLinkList([1, 3, 5, 2, 4])
    );
  });
  test('Example 2', () => {
    expect(oddEvenList(makeLinkList([2, 1, 3, 5, 6, 4, 7]))).toEqual(
        makeLinkList([2, 3, 6, 7, 1, 5, 4])
    );
  });
  test('Example 3', () => {
    expect(oddEvenList(makeLinkList([]))).toEqual(makeLinkList([]));
  });
  test('Example 4', () => {
    expect(oddEvenList(makeLinkList([1]))).toEqual(makeLinkList([1]));
  });
});
