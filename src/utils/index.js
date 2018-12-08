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

/**
 * Make binary tree from array
 * @param {Array} array
 * @return {TreeNode}
 */
export function makeBinaryTree(array) {
  if (array.length === 0 || array[0] === null) {
    return null;
  }

  const filter = (side) => (_, index) => {
    if (index === 0) {
      return false;
    }
    const v = Math.log2(index + 1);
    if (v - Math.floor(v) < 0.5) {
      return side === 'left';
    }
    return side !== 'left';
  };

  return {
    val: array[0],
    left: makeBinaryTree(array.filter(filter('left'))),
    right: makeBinaryTree(array.filter(filter('right'))),
  };
}
