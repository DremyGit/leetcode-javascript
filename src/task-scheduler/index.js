/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = (tasks, n) => {
  const taskCountsArr = [];
  for (let i = 0, len = tasks.length; i < len; i++) {
    const index = tasks[i].charCodeAt(0) - 65;
    taskCountsArr[index] = (taskCountsArr[index] || 0) + 1;
  }

  let t = 0;
  while (true) {
    let i = 0;
    while (i < taskCountsArr.length && i <= n) {
      taskCountsArr[i]--;
      t++;
      i++;
    }
    taskCountsArr.sort((a, b) => b - a);
    const zeroIndex = taskCountsArr.findIndex((v) => v === 0);
    if (zeroIndex === 0) {
      return t;
    }
    if (zeroIndex !== -1) {
      taskCountsArr.splice(zeroIndex);
    }
    while (i <= n) {
      t++;
      i++;
    }
  }
};

export default leastInterval;
