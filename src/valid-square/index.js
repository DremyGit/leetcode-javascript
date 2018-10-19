/**
 * Given the coordinates of four points in 2D space,
 * return whether the four points could construct a square.
 * @author Dremy <dremy@dremy.cn>
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
const validSquare = (p1, p2, p3, p4) => {
  const sides = [p1, p2, p3, p4];
  const sideLengthSqres = [];

  // 分别计算任意两点间的距离平方（为简化不进行开方处理）
  for (let i = 1; i < 4; i++) {
    const a = sides[i];
    for (let j = 0; j < i; j++) {
      const b = sides[j];
      const sideLengthSqr = Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2);
      sideLengthSqres.push(sideLengthSqr);
    }
  }

  sideLengthSqres.sort((a, b) => a - b);

  if (
    // 四条短边要相等
    sideLengthSqres[0] === sideLengthSqres[3] &&
    // 两条长边要相等
    sideLengthSqres[4] === sideLengthSqres[5] &&
    // 长边和短边不相等
    sideLengthSqres[3] !== sideLengthSqres[4]
  ) {
    return true;
  }
  return false;
};

export default validSquare;
