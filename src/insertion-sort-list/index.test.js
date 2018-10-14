import insertionSortList from './';

/**
 * Make linked list from array
 * @param {Array} arrayList
 * @return {ListNode}
 */
function makeLinkList(arrayList) {
  let i = arrayList.length;
  let next = null;
  while (i--) {
    const listNode = {
      val: arrayList[i],
      next,
    };
    next = listNode;
  }
  return next;
}

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
