import merge from './';

describe('88. Merge Sorted Array:', () => {
  test('Example 1', () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const nums2 = [2, 5, 6];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });
  test('Example 2', () => {
    const nums1 = [1];
    const nums2 = [];
    merge(nums1, 1, nums2, 0);
    expect(nums1).toEqual([1]);
  });
  test('Example 3', () => {
    const nums1 = [0];
    const nums2 = [1];
    merge(nums1, 0, nums2, 1);
    expect(nums1).toEqual([1]);
  });
});
