/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  const cntMap = {};
  const halfLen = Math.ceil(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in cntMap) {
      cntMap[nums[i]]++;
    } else {
      cntMap[nums[i]] = 1;
    }
    if (cntMap[nums[i]] >= halfLen) {
      return nums[i];
    }
  }
};

export default majorityElement;
