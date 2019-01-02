/**
 * @author Dremy <dremy@dremy.cn>
 * @param {number[][]} buildings
 * @return {number[][]}
 */
const getSkyline = (buildings) => {
  const topLeftPoints = buildings.map(([x1, _, h]) => [x1, h, 'l']);
  const topRightPoints = buildings.map(([_, x2, h]) => [x2, h, 'r']);

  const points = []
      .concat(topLeftPoints)
      .concat(topRightPoints)
      .sort(([ax], [bx]) => ax - bx);

  const keyPoints = [];
  const heightList = [];
  for (let i = 0, len = points.length; i < len; i++) {
    const [px, ph, ps] = points[i];
    if (ps === 'l') {
      heightList.push(ph);
      for (let j = 0, hlen = heightList.length; j < hlen; j++) {
        if (ph > heightList[j]) {
          heightList.splice(j, 0, ph);
          heightList.pop();
          break;
        }
      }
    } else {
      heightList.splice(heightList.findIndex((h) => h === ph), 1);
    }

    if (keyPoints.length === 0) {
      keyPoints.push([px, ph]);
    } else if (heightList.length === 0) {
      if (px === keyPoints[keyPoints.length - 1][0]) {
        keyPoints.pop();
      }
      keyPoints.push([px, 0]);
    } else if (heightList[0] !== keyPoints[keyPoints.length - 1][1]) {
      if (px === keyPoints[keyPoints.length - 1][0]) {
        keyPoints.pop();
      }
      keyPoints.push([px, heightList[0]]);
    }
  }

  return keyPoints;
};


export default getSkyline;
