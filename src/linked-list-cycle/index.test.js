import hasCycle from './';
import { makeLinkList } from '../utils';

describe('141. Linked List Cycle:', () => {
  test('Example 1', () => {
    const list = makeLinkList([3, 2, 0, -4]);
    list.next.next.next.next = list.next;
    expect(hasCycle(list)).toBe(true);
  });
  test('Example 2', () => {
    const list = makeLinkList([1, 2]);
    list.next.next = list;
    expect(hasCycle(list)).toBe(true);
  });
  test('Example 3', () => {
    const list = makeLinkList([1]);
    expect(hasCycle(list)).toBe(false);
  });
  test('Example 4', () => {
    const list = makeLinkList([]);
    expect(hasCycle(list)).toBe(false);
  });
});
