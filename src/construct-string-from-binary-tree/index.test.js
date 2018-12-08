import tree2str from './';
import { makeBinaryTree } from '../utils';

test('Example 1', () => {
  expect(tree2str(makeBinaryTree([1, 2, 3, 4]))).toBe('1(2(4))(3)');
});

test('Example 2', () => {
  expect(tree2str(makeBinaryTree([1, 2, 3, null, 4]))).toBe('1(2()(4))(3)');
});

test('Example 3', () => {
  expect(tree2str(makeBinaryTree([]))).toBe('');
});

test('Example 4', () => {
  expect(tree2str(makeBinaryTree([1]))).toBe('1');
});
