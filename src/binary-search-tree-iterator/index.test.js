import BSTIterator from './';
import { makeBinaryTree } from '../utils';

describe('173. Binary Search Tree Iterator:', () => {
  test('Example 1', () => {
    const iterator = new BSTIterator(makeBinaryTree(
        [7, 3, 15, null, null, 9, 20]
    ));
    expect(iterator.next()).toBe(3);
    expect(iterator.next()).toBe(7);
    expect(iterator.hasNext()).toBe(true);
    expect(iterator.next()).toBe(9);
    expect(iterator.hasNext()).toBe(true);
    expect(iterator.next()).toBe(15);
    expect(iterator.hasNext()).toBe(true);
    expect(iterator.next()).toBe(20);
    expect(iterator.hasNext()).toBe(false);
  });
  test('Example 2', () => {
    const iterator = new BSTIterator(makeBinaryTree(
        [3, 2, 6, 1, null, null, 8, null, null, null, null, null, null, 7]
    ));
    expect(iterator.hasNext()).toBe(true);
    expect(iterator.next()).toBe(1);
    expect(iterator.hasNext()).toBe(true);
    expect(iterator.next()).toBe(2);
    expect(iterator.hasNext()).toBe(true);
    expect(iterator.next()).toBe(3);
    expect(iterator.hasNext()).toBe(true);
    expect(iterator.next()).toBe(6);
    expect(iterator.hasNext()).toBe(true);
    expect(iterator.next()).toBe(7);
    expect(iterator.hasNext()).toBe(true);
    expect(iterator.next()).toBe(8);
    expect(iterator.hasNext()).toBe(false);
  });
  test('Null', () => {
    const iterator = new BSTIterator(makeBinaryTree([]));
    expect(iterator.next()).toBe(null);
    expect(iterator.hasNext()).toBe(false);
  });
});
