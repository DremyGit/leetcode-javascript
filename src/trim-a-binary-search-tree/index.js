/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
const trimBST = (root, L, R) => {
  if (root === null) {
    return null;
  }

  let left = null;
  if (root.left) {
    left = trimBST(root.left, L, R);
  }

  let right = null;
  if (root.right) {
    right = trimBST(root.right, L, R);
  }

  if (root.val < L) {
    return right;
  }
  if (root.val > R) {
    return left;
  }

  return {
    val: root.val,
    left,
    right,
  };
};

export default trimBST;
