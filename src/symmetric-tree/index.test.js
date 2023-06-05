import isSymmetric from './';
import { makeBinaryTree } from '../utils';

describe('101. Symmetric Tree:', () => {
  test('Example 1', () => {
    expect(isSymmetric(makeBinaryTree([1, 2, 2, 3, 4, 4, 3]))).toBe(true);
  });
  test('Example 2', () => {
    expect(isSymmetric(makeBinaryTree([1, 2, 2, null, 3, null, 3]))).toBe(false);
  });
  test('Example 3', () => {
    expect(isSymmetric(makeBinaryTree([1, 2, 3]))).toBe(false);
  });
});
