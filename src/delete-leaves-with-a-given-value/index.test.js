import removeLeafNodes from './';
import { makeBinaryTree } from '../utils';

describe('1325. Delete Leaves With a Given Value:', () => {
  test('Example 1', () => {
    expect(
        removeLeafNodes(makeBinaryTree([1, 2, 3, 2, null, 2, 4]), 2)
    ).toEqual(makeBinaryTree([1, null, 3, null, null, null, 4]));
  });
  test('Example 2', () => {
    expect(removeLeafNodes(makeBinaryTree([1, 3, 3, 3, 2]), 3)).toEqual(
        makeBinaryTree([1, 3, null, null, 2])
    );
  });
  test('Example 3', () => {
    expect(
        removeLeafNodes(makeBinaryTree([1, 2, null, 2, null, null, null, 2]), 2)
    ).toEqual(makeBinaryTree([1]));
  });
  test('Example 4', () => {
    expect(
        removeLeafNodes(makeBinaryTree([1, 1, 1]), 1)
    ).toEqual(makeBinaryTree([]));
  });
  test('Example 5', () => {
    expect(
        removeLeafNodes(makeBinaryTree([1, 2, 3]), 1)
    ).toEqual(makeBinaryTree([1, 2, 3]));
  });
});
