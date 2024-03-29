/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
  return traverse(root.left, root.right);
};

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function traverse(tree1, tree2) {
  if (!tree1 && !tree2) {
    return true;
  }
  if (!tree1 || !tree2) {
    return false;
  }
  if (tree1.val !== tree2.val) {
    return false;
  }
  if (traverse(tree1.left, tree2.right) && traverse(tree1.right, tree2.left)) {
    return true;
  }
  return false;
}

export default isSymmetric;
