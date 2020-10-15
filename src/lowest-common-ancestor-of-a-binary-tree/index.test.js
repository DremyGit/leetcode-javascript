import lowestCommonAncestor from './';
import { makeBinaryTree } from '../utils';

describe('236. Lowest Common Ancestor of a Binary Tree:', () => {
  test('Example 1', () => {
    expect(
        lowestCommonAncestor(
            makeBinaryTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]),
            makeBinaryTree([5]),
            makeBinaryTree([1]),
        )
    ).toHaveProperty('val', 3);
  });

  test('Example 2', () => {
    expect(
        lowestCommonAncestor(
            makeBinaryTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]),
            makeBinaryTree([5]),
            makeBinaryTree([4]),
        )
    ).toHaveProperty('val', 5);
  });

  test('Example 3', () => {
    expect(
        lowestCommonAncestor(
            makeBinaryTree([1, 2]),
            makeBinaryTree([1]),
            makeBinaryTree([2]),
        )
    ).toHaveProperty('val', 1);
  });

  test('Example 4', () => {
    expect(
        lowestCommonAncestor(
            makeBinaryTree([-1, 0, 3, -2, 4, null, null, 8]),
            makeBinaryTree([3]),
            makeBinaryTree([8]),
        )
    ).toHaveProperty('val', -1);
  });

  test('Example 5', () => {
    expect(
        lowestCommonAncestor(
            makeBinaryTree([1, 2]),
            makeBinaryTree([2]),
            makeBinaryTree([1]),
        )
    ).toHaveProperty('val', 1);
  });
});
