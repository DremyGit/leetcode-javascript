/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  let value = 0;
  for (let i = 0; i < nums.length; i++) {
    value ^= nums[i];
  }
  return value;
};
export default singleNumber;
