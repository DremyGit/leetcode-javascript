import sortedArrayToBST from './';
import { makeBinaryTree } from '../utils';

describe('108. Convert Sorted Array to Binary Search Tree:', () => {
  test('Example 1', () => {
    expect(sortedArrayToBST([-10, -3, 0, 5, 9])).toEqual(
        makeBinaryTree([0, -10, 5, null, -3, null, 9])
    );
  });
  test('Example 2', () => {
    expect(sortedArrayToBST([1, 3])).toEqual(makeBinaryTree([1, null, 3]));
  });
  test('Example 3', () => {
    expect(sortedArrayToBST([1, 3, 5, 7])).toEqual(
        makeBinaryTree([5, 1, 7, null, 3])
    );
  });
  test('Example 4', () => {
    expect(sortedArrayToBST([-10, -3, 0, 5, 9, 11])).toEqual(
        makeBinaryTree([5, -3, 9, -10, 0, null, 11])
    );
  });
});
