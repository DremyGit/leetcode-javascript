/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
  const list = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      const t = target - nums[i] - nums[j];
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        if (nums[left] + nums[right] === t) {
          list.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left + 1] === nums[left]) {
            left++;
          }
          while (left < right && nums[right - 1] === nums[right]) {
            right--;
          }
          left++;
          right--;
        } else if (nums[left] + nums[right] <= t) {
          left++;
        } else {
          right--;
        }
      }
      while (nums[j + 1] === nums[j]) {
        j++;
      }
    }
    while (nums[i + 1] === nums[i]) {
      i++;
    }
  }
  return list;
};

export default fourSum;
