/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  const max = ((1 + nums.length) * nums.length) / 2;
  const total = nums.reduce((total, num) => total + num, 0);
  return max - total;
};

export default missingNumber;
