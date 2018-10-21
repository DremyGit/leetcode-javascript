/**
 * Find the total area covered by two rectilinear
 * rectangles in a 2D plane.
 * @author Dremy <dremy@dremy.cn>
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
const computeArea = (A, B, C, D, E, F, G, H) => {
  // 两个长方形的面积
  const rect1 = (C - A) * (D - B);
  const rect2 = (G - E) * (H - F);

  // 判断两个长方形是否不重叠
  if (C < E || B > H || A > G || D < F) {
    return rect1 + rect2;
  }

  const x = [A, C, E, G];
  const y = [B, D, F, H];
  x.sort((a, b) => a - b);
  y.sort((a, b) => a - b);

  // 重叠区域的面积
  const rectDump = (x[2] - x[1]) * (y[2] - y[1]);
  return rect1 + rect2 - rectDump;
};

export default computeArea;
