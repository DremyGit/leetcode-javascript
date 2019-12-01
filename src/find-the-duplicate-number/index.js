/**
 * Given an array nums containing n + 1 integers where each integer is
 * between 1 and n (inclusive), prove that at least one duplicate number must exist.
 * Assume that there is only one duplicate number, find the duplicate one.
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = (nums) => {
  const map = {};
  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i];
    if (map[num] === true) {
      return num;
    }
    map[num] = true;
  }
};

export default findDuplicate;
