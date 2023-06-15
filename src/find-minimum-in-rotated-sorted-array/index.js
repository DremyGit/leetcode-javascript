/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  while (left < right - 1) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return Math.min(nums[left], nums[right]);
};

export default findMin;
