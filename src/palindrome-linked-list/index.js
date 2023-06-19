/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
  // find half node
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // reverse latter half linklist
  let prev = null;
  let curr = slow.next;
  slow.next = null;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // iterate and compare between head and tail
  let left = head;
  let right = prev;
  while (left && right) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }
  return (!left || !left.next) && !right;
};

export default isPalindrome;
