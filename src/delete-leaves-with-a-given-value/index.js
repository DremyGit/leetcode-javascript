/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
const removeLeafNodes = (root, target) => {
  let left = null;
  let right = null;
  if (root.left) {
    left = removeLeafNodes(root.left, target);
  }
  if (root.right) {
    right = removeLeafNodes(root.right, target);
  }
  if (!left && !right && root.val === target) {
    return null;
  }
  return {
    val: root.val,
    left,
    right,
  };
};

export default removeLeafNodes;
