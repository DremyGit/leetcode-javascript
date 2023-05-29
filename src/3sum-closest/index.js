
const threeSumClosest = (nums, target) => {
  const len = nums.length;
  nums.sort((a, b) => a - b);

  let minDist = Infinity;
  let isNagetive = false;

  for (let i = 0; i < len - 2; i++) {
    while (nums[i] === nums[i - 1]) {
      i++;
    }
    let j = i + 1;
    let k = len - 1;

    const target2 = target - nums[i];


    while (j < k) {
      const value = nums[j] + nums[k];
      if (value === target2) {
        return target;
      }
      const dist = Math.abs(target2 - value);
      if (dist < minDist) {
        minDist = dist;
        isNagetive = target2 > value;
      }
      if (value < target2) {
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
  return isNagetive ? target - minDist : target + minDist;
};

export default threeSumClosest;
