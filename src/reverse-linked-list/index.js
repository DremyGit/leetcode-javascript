/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export function reverseListIterator(head) {
  if (!head) {
    return null;
  }
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

// eslint-disable-next-line require-jsdoc
export function reverseListRecursive(head) {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head;
  }
  const node = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return node;
}
