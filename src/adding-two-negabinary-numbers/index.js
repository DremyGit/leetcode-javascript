/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const addNegabinary = (arr1, arr2) => {
  const arr1Len = arr1.length;
  const arr2Len = arr2.length;
  const resultArr = [];
  let carryFlag = false;
  let carryRest = 0;
  for (let i = 0; i < arr1Len || i < arr2Len; i++) {
    const a = arr1[arr1Len - i - 1] || 0;
    const b = arr2[arr2Len - i - 1] || 0;
    let sum = a + b;
    if (carryFlag) {
      carryFlag = false;
      if (sum > 0) {
        sum--;
      } else {
        carryRest = 2;
      }
    }
    if (carryRest) {
      sum++;
      carryRest--;
    }
    if (sum >= 2) {
      carryFlag = true;
      resultArr.push(sum - 2);
    } else {
      resultArr.push(sum);
    }
  }
  if (carryFlag) {
    carryRest = 2;
  }
  while (carryRest) {
    resultArr.push(1);
    carryRest--;
  }
  for (let i = resultArr.length - 1; i > 0; i--) {
    if (resultArr[i] !== 0) {
      break;
    }
    resultArr.pop();
  }
  return resultArr.reverse();
};

export default addNegabinary;
