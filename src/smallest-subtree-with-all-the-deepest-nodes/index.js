/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const subtreeWithAllDeepest = (root) => {
  return travel(root).subtree;
};

/**
 * 遍历二叉树，获取自底向上的深度及其最深子树
 */
function travel(node) {
  if (node === null) {
    return { depth: 0, subtree: null };
  }

  const left = travel(node.left);
  const right = travel(node.right);

  return {
    depth: Math.max(left.depth, right.depth) + 1,
    subtree:
      left.depth === right.depth
        ? node
        : left.depth > right.depth
          ? left.subtree
          : right.subtree,
  };
}

export default subtreeWithAllDeepest;
