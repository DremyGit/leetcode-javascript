import {makeLinkList, makeBinaryTree} from './';

test('makeLinkList', () => {
  expect(makeLinkList([1, 2, 3])).toEqual({
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: null,
      },
    },
  });
});

test('makeBinaryTree', () => {
  expect(makeBinaryTree([1, 2, 3, null, 4])).toEqual({
    val: 1,
    left: {
      val: 2,
      left: null,
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  });
});
