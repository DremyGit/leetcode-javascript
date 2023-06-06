/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  let i = 0;
  let j = 0;
  let k = nums.length - 1;

  while (j <= k) {
    if (nums[j] === 0) {
      swap(nums, i, j);
      i++;
      j++;
    } else if (nums[j] === 1) {
      j++;
    } else {
      swap(nums, j, k);
      k--;
    }
  }
};

/**
 * @param {number[]} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export default sortColors;
