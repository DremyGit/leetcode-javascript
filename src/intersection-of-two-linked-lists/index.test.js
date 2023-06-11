import getIntersectionNode from './';
import { makeLinkList } from '../utils';

describe('160. Intersection of Two Linked Lists:', () => {
  test('Example 1', () => {
    const intersectionLinkList = makeLinkList([8, 4, 5]);
    const linkA = { val: 4, next: { val: 1, next: intersectionLinkList } };
    const linkB = { val: 5, next: { val: 6, next: { val: 1, next: intersectionLinkList } } };
    expect(getIntersectionNode(linkA, linkB)).toBe(intersectionLinkList);
  });
  test('Example 2', () => {
    const intersectionLinkList = makeLinkList([2, 4]);
    const linkA = { val: 1, next: { val: 9, next: { val: 1, next: intersectionLinkList } } };
    const linkB = { val: 3, next: intersectionLinkList };
    expect(getIntersectionNode(linkA, linkB)).toBe(intersectionLinkList);
  });
  test('Example 3', () => {
    expect(getIntersectionNode(makeLinkList([2, 6, 4]), makeLinkList([1, 5]))).toBe(null);
  });
});
