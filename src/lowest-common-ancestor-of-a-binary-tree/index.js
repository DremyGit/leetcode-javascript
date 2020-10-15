/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
  const tree = dfs(root, p, q);
  return dfs2(tree, p, q);
};

const dfs = (root, p, q) => {
  const node = {};
  node.val = null;
  if (root.left) {
    node.left = dfs(root.left, p, q);
  }
  if (root.right) {
    node.right = dfs(root.right, p, q);
  }
  if (root.val === p.val || root.val === q.val || node.left || node.right) {
    node.val = root.val;
  }
  return node.val !== null ? node : null;
};

const dfs2 = (root, p, q) => {
  if (root.left && root.right) {
    return root;
  }
  if (root.left) {
    return dfs2(root.left, p, q);
  }
  if (root.right) {
    return dfs2(root.right, p, q);
  }
  return root.val === p.val ? q : p;
};

export default lowestCommonAncestor;
