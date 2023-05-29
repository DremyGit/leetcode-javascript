# 15. 3Sum

[https://leetcode.com/problems/3sum/](https://leetcode.com/problems/3sum/)

## Description

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

**Example 1:**

    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]
    Explanation:
    nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
    nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
    nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
    The distinct triplets are [-1,0,1] and [-1,-1,2].
    Notice that the order of the output and the order of the triplets does not matter.

**Example 2:**

    Input: nums = [0,1,1]
    Output: []
    Explanation: The only possible triplet does not sum up to 0.

**Example 3:**

    Input: nums = [0,0,0]
    Output: [[0,0,0]]
    Explanation: The only possible triplet sums up to 0.


**Constraints:**

* 3 <= nums.length <= 3000
* -105 <= nums[i] <= 105


## 解题思路

1. 数组排序
2. 从左至右遍历 i，取得数字 a = num[i]
3. 取 b = nums[i + 1]，c = nums[nums.length - 1]
4. 每次比较 b + c 与 -a，调整 b 和 c 的位置缩小范围，直到两者相等
5. 同时缩小 b 和 c 的范围

注意：
1. num.length < 3 的情况返回 []
2. b 不能在 c 右边
3. 跳过相同数字
