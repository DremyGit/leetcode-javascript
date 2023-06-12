/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums, start = 0, end = nums.length) => {
  if (end - start === 1) {
    return {
      val: nums[start],
      left: null,
      right: null,
    };
  }
  if (end - start === 2) {
    return {
      val: nums[start],
      left: null,
      right: {
        val: nums[start + 1],
        left: null,
        right: null,
      },
    };
  }
  if (end - start === 3) {
    return {
      val: nums[start + 1],
      left: { val: nums[start], left: null, right: null },
      right: { val: nums[start + 2], left: null, right: null },
    };
  }
  const middle = Math.floor((start + end) / 2);
  return {
    val: nums[middle],
    left: sortedArrayToBST(nums, start, middle),
    right: sortedArrayToBST(nums, middle + 1, end),
  };
};

export default sortedArrayToBST;
