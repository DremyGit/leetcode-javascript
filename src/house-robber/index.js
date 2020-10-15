/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums, i = nums.length - 1, memo = {}) => {
  // i 表示递归的当前位置
  if (i < 0) {
    return 0;
  }
  if (memo[i]) {
    return memo[i];
  }
  // 当前位置值为0时，可以直接取之前数组
  if (nums[i] === 0) {
    return rob(nums, i - 1);
  }
  // 通过 DP 递归比较前2与前1的大小，取最大值，结果通过 memo 缓存
  return memo[i] = Math.max(rob(nums, i - 2, memo) + nums[i], rob(nums, i - 1, memo));
};


export default rob;
