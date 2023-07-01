
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  let i = 0;
  let j = 0;
  while (nums[i] === val) {
    i++;
  }
  while (i < nums.length) {
    nums[j] = nums[i];
    i++;
    j++;
    while (nums[i] === val) {
      i++;
    }
  }
  return j;
};

export default removeElement;
