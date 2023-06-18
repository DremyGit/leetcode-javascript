import diameterOfBinaryTree from './';
import { makeBinaryTree } from '../utils';

describe('543. Diameter of Binary Tree:', () => {
  test('Example 1', () => {
    expect(diameterOfBinaryTree(makeBinaryTree([1, 2, 3, 4, 5]))).toBe(3);
  });
  test('Example 2', () => {
    expect(diameterOfBinaryTree(makeBinaryTree([1, 2]))).toBe(1);
  });
});
