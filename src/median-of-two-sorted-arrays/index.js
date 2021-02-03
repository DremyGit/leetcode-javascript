/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const len1 = nums1.length;
  const len2 = nums2.length;

  const halfLen = Math.ceil((len1 + len2) / 2);
  const needAvg = (len1 + len2) % 2 === 0;
  const end = needAvg ? halfLen + 1 : halfLen;

  let i = 0;
  let j = 0;
  let prev = undefined;
  let curr = undefined;

  for (let k = 0; k < end; k++) {
    prev = curr;
    const num1 = i < len1 ? nums1[i] : Infinity;
    const num2 = j < len2 ? nums2[j] : Infinity;
    if (num1 <= num2) {
      curr = num1;
      i++;
    } else {
      curr = num2;
      j++;
    }
  }
  return prev && needAvg ? (prev + curr) / 2 : curr;
};

export default findMedianSortedArrays;
