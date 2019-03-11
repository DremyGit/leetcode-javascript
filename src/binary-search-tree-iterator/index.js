/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = Object.create(BSTIterator).createNew(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
class BSTIterator {
  /**
 * @param {TreeNode} root
 */
  constructor(root) {
    this.tree = root;
    this.path = [];
  }

  /**
   * @return the next smallest number
   * @return {number}
   */
  next() {
    const now = this.path[this.path.length - 1] || null;
    let next;

    if (!now) {
      if (!this.tree) {
        return null;
      }
      next = travelLeft(this.tree, this.path);
      return next.val;
    };

    if (now.right) {
      next = travelLeft(now.right, this.path);
      return next.val;
    }

    next = travelBack(now, this.path);
    return next.val;
  }


  /**
   * @return whether we have a next smallest number
   * @return {boolean}
   */
  hasNext() {
    if (!this.tree) {
      return false;
    }
    const now = this.path[this.path.length - 1];
    if (!now) {
      return true;
    }
    if (now.right) {
      return true;
    }

    for (let i = this.path.length - 2; i >= 0; i--) {
      if (this.path[i].val >= now.val) {
        return true;
      }
    }

    return false;
  }
}

/**
 * @param {*} node
 * @param {*} path
 * @return next
 */
function travelLeft(node, path) {
  let next = node;
  path.push(node);
  while (next.left !== null) {
    next = next.left;
    path.push(next);
  }
  return next;
}

/**
 * @param {*} node
 * @param {*} path
 * @return next
 */
function travelBack(node, path) {
  const next = path[path.length - 2];
  path.pop();
  return next;
}

export default BSTIterator;
