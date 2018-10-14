/**
 * Sort a linked list using insertion sort.
 * @author Dremy <dremy@dremy.cn>
 * @param {ListNode} head
 * @return {ListNode}
 */
const insertionSortList = function(head) {
  let current = head;

  if (head === null) {
    return null;
  }

  while (current.next !== null) {
    // 如果相邻元素间后者比前者小，则进行处理
    if (current.next.val < current.val) {
      const nextNode = current.next;
      // 当第一个元素比该元素大时，该元素称为链表首元素
      if (head.val > current.next.val) {
        current.next = nextNode.next;
        nextNode.next = head;
        head = nextNode;
      } else {
        // 否则从头向后寻找比该数更大的值，并插入到其前面
        const prevNode = find(head, current, (val) => val > current.next.val);
        current.next = current.next.next;
        nextNode.next = prevNode.next;
        prevNode.next = nextNode;
      }
    } else {
      current = current.next;
    }
  }
  return head;
};

/**
 * 向后查找链表满足条件的节点
 * @param {ListNode} head - 查找起点
 * @param {ListNode} target - 查找终点
 * @param {(val) => boolean} condition - 查找条件
 * @return {ListNode} - 第一个满足条件的前一个节点
 */
function find(head, target, condition) {
  let current = head;

  while (current.next !== null && current !== target) {
    if (condition(current.next.val)) {
      return current;
    }
    current = current.next;
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * @typedef {Object} ListNode
 * @property {any} val
 * @property {ListNode} next
 */

export default insertionSortList;
