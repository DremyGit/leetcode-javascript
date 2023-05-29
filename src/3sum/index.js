
const threeSum = (nums) => {
  const len = nums.length;
  if (len < 3) {
    return [];
  }
  const list = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 2; i++) {
    while (nums[i] === nums[i - 1]) {
      i++;
    }
    let j = i + 1;
    let k = len - 1;

    const target = -nums[i];

    while (j < k) {
      const value = nums[j] + nums[k];
      if (value === target) {
        list.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
      } else if (value < target) {
        j++;
      } else {
        k--;
      }
      while (j > i + 1 && nums[j] === nums[j - 1] && j < k) {
        j++;
      }
      while (k < len - 1 && nums[k] === nums[k + 1] && j < k) {
        k--;
      }
    }
  }
  return list;
};

export default threeSum;
