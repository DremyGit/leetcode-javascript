
/**
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size
 * of array), some elements appear twice and others appear
 * once.
 * @author Dremy <dremy@dremy.cn>
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
  const res = [];
  // O(n)排序去重
  for (let i = 0, len = nums.length; i < len; i++) {
    res[nums[i] - 1] = nums[i];
  }

  // O(n)将存在的数置0，将不存在的数找出
  for (let i = 0, len = nums.length; i< len; i++) {
    if (res[i]) {
      res[i] = 0;
    } else {
      res[i] = i + 1;
    }
  }

  // 过滤
  return res.filter((num) => !!num);
};

export default findDisappearedNumbers;
