import insertionSortList from './';
import {makeLinkList} from '../utils';

test('Example 1', () => {
  expect(insertionSortList(makeLinkList([4, 2, 1, 3])))
      .toEqual(makeLinkList([1, 2, 3, 4]));
});

test('Example 2', () => {
  expect(insertionSortList(makeLinkList([-1, 5, 3, 4, 0])))
      .toEqual(makeLinkList([-1, 0, 3, 4, 5]));
});

test('empty', () => {
  expect(insertionSortList(makeLinkList([])))
      .toEqual(makeLinkList([]));
});

test('1', () => {
  expect(insertionSortList(makeLinkList([1])))
      .toEqual(makeLinkList([1]));
});
