import reverseKGroup from './';
import {makeLinkList} from '../utils';

test('Example 0', () => {
  expect(reverseKGroup(makeLinkList([]), 1))
      .toEqual(makeLinkList([]));
});

test('Example 1', () => {
  expect(reverseKGroup(makeLinkList([1, 2, 3, 4, 5]), 1))
      .toEqual(makeLinkList([1, 2, 3, 4, 5]));
});

test('Example 2', () => {
  expect(reverseKGroup(makeLinkList([1, 2, 3, 4, 5]), 2))
      .toEqual(makeLinkList([2, 1, 4, 3, 5]));
});

test('Example 3', () => {
  expect(reverseKGroup(makeLinkList([1, 2, 3, 4, 5]), 3))
      .toEqual(makeLinkList([3, 2, 1, 4, 5]));
});

test('Example 5', () => {
  expect(reverseKGroup(makeLinkList([1, 2, 3, 4, 5]), 5))
      .toEqual(makeLinkList([5, 4, 3, 2, 1]));
});

test('Example 6', () => {
  expect(reverseKGroup(makeLinkList([1, 2, 3, 4, 5]), 6))
      .toEqual(makeLinkList([1, 2, 3, 4, 5]));
});
