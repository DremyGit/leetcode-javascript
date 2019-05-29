/**
 * Given a Binary Search Tree and a target number,
 * return true if there exist two elements in the
 * BST such that their sum is equal to the given target.
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
const findTarget = (root, k) => {
  const arr = recursion(root);
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] === k) {
      return true;
    }
    if (arr[i] + arr[j] < k) {
      i++;
    } else {
      j--;
    }
  }
  return false;
};

/**
 * 将BST转化为list
 * @param {TreeNode} root
 */
function recursion(node) {
  const list = [];
  if (node.left) {
    [].push.apply(list, recursion(node.left));
  }
  list.push(node.val);
  if (node.right) {
    [].push.apply(list, recursion(node.right));
  }
  return list;
}

export default findTarget;
