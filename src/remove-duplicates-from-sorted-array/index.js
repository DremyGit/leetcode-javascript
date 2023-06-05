/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      let j = 1;
      while (i + j < nums.length && nums[i + j] === nums[i]) {
        j++;
      }
      nums.splice(i, j);
    }
  }
  return nums.length;
};

export default removeDuplicates;
