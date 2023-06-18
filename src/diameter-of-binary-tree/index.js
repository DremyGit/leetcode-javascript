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
 * @return {number}
 */
const diameterOfBinaryTree = (root) => {
  let maxDiameter = 0;
  // eslint-disable-next-line require-jsdoc
  function traverseDepth(root) {
    if (!root) {
      return 0;
    }
    const left = traverseDepth(root.left);
    const right = traverseDepth(root.right);
    if (left + right > maxDiameter) {
      maxDiameter = left + right;
    }
    return 1 + Math.max(left, right);
  }
  traverseDepth(root);
  return maxDiameter;
};

export default diameterOfBinaryTree;
