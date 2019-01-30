import trimBST from './';
import { makeBinaryTree } from '../utils';

test('Example 1', () => {
  expect(trimBST(makeBinaryTree([1, 0, 2]), 1, 2)).toEqual(
      makeBinaryTree([1, null, 2])
  );
});

test('Example 2', () => {
  expect(
      trimBST(makeBinaryTree(
          [3, 0, 4, null, 2, null, null, null, null, 1]
      ), 1, 3)
  ).toEqual(makeBinaryTree([3, 2, null, 1]));
});

test('Example 3', () => {
  expect(
      trimBST(makeBinaryTree(
          [3, 0, 4, null, 2, null, null, null, null, 1]
      ), 1, 2)
  ).toEqual(makeBinaryTree([2, 1]));
});

test('Example 4', () => {
  expect(trimBST(makeBinaryTree([]), 1, 2)).toEqual(makeBinaryTree([]));
});
