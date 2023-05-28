/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (right > left) {
    const area = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(max, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

export default maxArea;
