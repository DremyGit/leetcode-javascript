/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  const random = nums[Math.floor(Math.random() * nums.length)];

  const left = nums.filter((num) => num > random);
  if (k <= left.length) {
    return findKthLargest(left, k);
  }

  const middle = nums.filter((num) => num === random);
  if (k <= left.length + middle.length) {
    return random;
  }

  const right = nums.filter((num) => num < random);
  return findKthLargest(right, k - left.length - middle.length);
};

export default findKthLargest;
