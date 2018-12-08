/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function(head, k) {
  if (head === null) {
    return null;
  }

  let current = head;
  let n = k;
  while (n-- > 1) {
    current = current.next;
    // 如果到达链表尾部，直接返回该组链表
    if (current === null) {
      return head;
    }
  }

  const next = reverseKGroup(current.next, k);

  reverse(head, next, k);

  return current;
};

/**
 * 反转链表
 * @param {ListNode} node
 */
function reverse(node, lastNext, k, depth = 1) {
  if (node.next === null || depth === k) {
    return node;
  }

  const next = reverse(node.next, lastNext, k, depth + 1);
  node.next.next = node;
  node.next = lastNext;
  return next;
}

export default reverseKGroup;
