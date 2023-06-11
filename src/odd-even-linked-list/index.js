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
const oddEvenList = (head) => {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head;
  }
  let oddList = null;
  let evenList = null;

  let curr = head;
  let oddCurr = null;
  let evenCurr = null;
  while (curr) {
    if (oddCurr) {
      oddCurr.next = curr;
    } else {
      oddList = curr;
    }
    oddCurr = curr;
    curr = curr.next;
    if (curr) {
      if (evenCurr) {
        evenCurr.next = curr;
      } else {
        evenList = curr;
      }
      evenCurr = curr;
      curr = curr.next;
    }
  }

  oddCurr.next = evenList;
  evenCurr.next = null;
  return oddList;
};

export default oddEvenList;
