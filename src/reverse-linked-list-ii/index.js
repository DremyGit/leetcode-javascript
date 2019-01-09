/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = (head, m, n) => {
  let lastNext;

  /**
   * 反转链表
   * @param {ListNode} node
   */
  function reverse(node, m, n) {
    // 到 n 处或尾部结束反转
    if (node.next === null || n === 1) {
      return node;
    }

    const next = reverse(node.next, m - 1, n - 1);

    // 从 m 处开始反转
    if (m === 2) {
      node.next = next;
    }

    // m 处前不反转，直接返回该节点
    if (m > 1) {
      return node;
    }

    // 设定反转结束元素
    if (typeof lastNext === 'undefined') {
      lastNext = next.next;
    }

    node.next.next = node;
    node.next = lastNext;

    // 反转时返回最后元素
    return next;
  }

  return reverse(head, m, n);
};

export default reverseBetween;
