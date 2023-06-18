/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let i = 0;
  let j = 0;
  while (i < nums.length) {
    while (nums[i] === 0 && i + 1 < nums.length) {
      i++;
    }
    nums[j] = nums[i];
    i++;
    j++;
  }
  while (j < nums.length) {
    nums[j] = 0;
    j++;
  }
};

export default moveZeroes;
