/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * You need to construct a string consists of parenthesis
 * and integers from a binary tree with the preorder
 * traversing way.
 * @author Dremy <dremy@dremy.cn>
 * @param {TreeNode} t
 * @return {string}
 */
const tree2str = (t) => {
  if (t === null) {
    return '';
  }
  const { val, left, right } = t;
  if (left === null && right === null) {
    return `${val}`;
  }
  if (right === null) {
    return `${val}(${tree2str(left)})`;
  }
  return `${val}(${tree2str(left)})(${tree2str(right)})`;
};

export default tree2str;
