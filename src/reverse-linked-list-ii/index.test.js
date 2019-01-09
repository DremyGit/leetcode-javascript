import reverseBetween from './';
import { makeLinkList } from '../utils';

test('Example 1', () => {
  expect(reverseBetween(makeLinkList([1, 2, 3, 4, 5]), 1, 5)).toEqual(
      makeLinkList([5, 4, 3, 2, 1])
  );
});

test('Example 1', () => {
  expect(reverseBetween(makeLinkList([1, 2, 3, 4, 5]), 2, 4)).toEqual(
      makeLinkList([1, 4, 3, 2, 5])
  );
});

test('Example 1', () => {
  expect(reverseBetween(makeLinkList([1, 2, 3, 4, 5]), 2, 5)).toEqual(
      makeLinkList([1, 5, 4, 3, 2])
  );
});

test('Example 1', () => {
  expect(reverseBetween(makeLinkList([1, 2, 3, 4, 5]), 3, 4)).toEqual(
      makeLinkList([1, 2, 4, 3, 5])
  );
});

test('Example 1', () => {
  expect(reverseBetween(makeLinkList([1]), 1, 1)).toEqual(
      makeLinkList([1])
  );
});

test('Example 1', () => {
  expect(reverseBetween(makeLinkList([1, 2]), 1, 2)).toEqual(
      makeLinkList([2, 1])
  );
});
