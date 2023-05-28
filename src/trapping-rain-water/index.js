/**
 * @param {number[]} height
 * @return {number}
 */
let trap = function(height) {
  const leftMaxList = getMaxList(height, 1);
  const rightMaxList = getMaxList(height, -1);
  const sum = height.reduce(
      (total, h, index) =>
        (total += getWater(h, leftMaxList[index], rightMaxList[index])),
      0
  );
  return sum;
};

const getMaxList = (_height, position) => {
  const height = _height.slice();
  if (position < 0) {
    height.reverse();
  }
  const list = [height[0]];
  for (let i = 1, len = height.length; i < len; i++) {
    if (height[i] > list[i - 1]) {
      list[i] = height[i];
    } else {
      list[i] = list[i - 1];
    }
  }
  if (position < 0) {
    list.reverse();
  }
  return list;
};

const getWater = (h, leftMax, rightMax) => {
  const value = Math.max(Math.min(leftMax, rightMax) - h, 0);
  return value;
};

export default trap;
