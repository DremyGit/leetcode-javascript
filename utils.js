/**
 * Make linked list from array
 * @param {Array} arrayList
 * @return {ListNode}
 */
export function makeLinkList(arrayList) {
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
