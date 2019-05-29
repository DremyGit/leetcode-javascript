import findTarget from './';
import { makeBinaryTree } from '../utils';

describe('653. Two Sum IV - Input is a BST:', () => {
  test('Example 1', () => {
    expect(
        findTarget(makeBinaryTree([5, 3, 6, 2, 4, null, 7]), 9)
    ).toBe(true);
  });
  test('Example 2', () => {
    expect(
        findTarget(makeBinaryTree([5, 3, 6, 2, 4, null, 7]), 28)
    ).toBe(false);
  });
  test('Example 3', () => {
    expect(
        findTarget(makeBinaryTree([2, 1, 3]), 3)
    ).toBe(true);
  });
  test('Example 4', () => {
    expect(
        findTarget(makeBinaryTree([0, -1, 2, -3, null, null, 4]), -4)
    ).toBe(true);
  });
});
