/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2, curry = 0) => {
  if (!l1 && !l2 && !curry) {
    return null;
  }
  const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + curry;
  return {
    val: sum > 9 ? sum - 10 : sum,
    next: addTwoNumbers(l1 && l1.next, l2 && l2.next, sum > 9 ? 1 : 0),
  };
};

export default addTwoNumbers;
