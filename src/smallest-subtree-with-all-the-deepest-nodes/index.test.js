import subtreeWithAllDeepest from './';
import { makeBinaryTree } from '../utils';

test('Example 1', () => {
  expect(
      subtreeWithAllDeepest(
          makeBinaryTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
      )
  ).toEqual(makeBinaryTree([2, 7, 4]));
});

test('Example 2', () => {
  expect(
      subtreeWithAllDeepest(
          makeBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
      )
  ).toEqual(makeBinaryTree([2, 4, 5, 8, 9, 10, 11]));
});

test('Example 3', () => {
  expect(
      subtreeWithAllDeepest(
          makeBinaryTree([])
      )
  ).toEqual(makeBinaryTree([]));
});
