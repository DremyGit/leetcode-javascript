# 42. Trapping Rain Water

[https://leetcode.com/problems/trapping-rain-water/](https://leetcode.com/problems/trapping-rain-water/)

## Description

经典面试题：接雨水

## 思路

针对每个x，计算其左侧和右侧（不含自身）最高的墙，最矮的墙与x的差值即为当前x可容纳的雨水，累加即可得到结果。

性能优化点：
1. 如何快速计算 x 左侧和右侧最高墙？
动态规划思路：
左侧墙：从左至右每次都和当前最大值进行比较，即可获取 x 左侧最高墙，右侧则方向相反。
