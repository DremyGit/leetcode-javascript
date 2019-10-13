/**
 * Return the square of the maximum Euclidean distance
 * that the robot will be from the origin.
 *
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
const robotSim = (commands, obstacles) => {
  // 0: up, 1: right, 2: down, 3: left
  let direction = 0;
  let xy = [0, 0];
  let max = 0;

  const xObstaclesMap = obstacles.reduce((map, [x, y]) => {
    if (Array.isArray(map[x])) {
      map[x].push(y);
    } else {
      map[x] = [y];
    }
    return map;
  }, {});
  const yObstaclesMap = obstacles.reduce((map, [x, y]) => {
    if (Array.isArray(map[y])) {
      map[y].push(x);
    } else {
      map[y] = [x];
    }
    return map;
  }, {});

  for (let i = 0, len = commands.length; i < len; i++) {
    switch (commands[i]) {
      case -2:
        direction = (direction + 3) % 4;
        break;

      case -1:
        direction = (direction + 1) % 4;
        break;

      default:
        const length = commands[i];
        const [x, y] = xy;

        if (direction % 2 === 0) {
          // up or down
          const b = -direction + 1;
          let deltY = b * length;
          if (xObstaclesMap[x]) {
            const middles = xObstaclesMap[x].filter(
                (value) => y !== value && (y - value) * (y + deltY - value) <= 0
            );
            if (middles.length) {
              const middle = middles[0];
              xy = [x, middle - b];
              break;
            }
          }
          xy = [x, y + deltY];
        } else {
          // left or right
          const a = -direction + 2;
          let deltX = a * length;
          if (yObstaclesMap[y]) {
            const middles = yObstaclesMap[y].filter(
                (value) => x !== value && (x - value) * (x + deltX - value) <= 0
            );
            if (middles.length) {
              const middle = middles[0];
              xy = [middle - a, y];
              break;
            }
          }
          xy = [x + deltX, y];
        }
        break;
    }
    max = Math.max(max, xy[0] * xy[0] + xy[1] * xy[1]);
  }
  return max;
};

export default robotSim;
