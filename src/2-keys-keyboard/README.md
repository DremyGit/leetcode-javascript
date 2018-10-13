# 650. 2 Keys Keyboard

[https://leetcode.com/problems/2-keys-keyboard/](https://leetcode.com/problems/2-keys-keyboard/)

## Description

Initially on a notepad only one character 'A' is present. You can perform two operations on this notepad for each step:

1. Copy All: You can copy all the characters present on the notepad (partial copy is not allowed).

2. Paste: You can paste the characters which are copied **last time**.

Given a number n. You have to get **exactly** n 'A' on the notepad by performing the minimum number of steps permitted. Output the minimum number of steps to get n 'A'.

**Example 1**:

**Input**: 3

**Output**: 3

**Explanation:**

- Intitally, we have one character 'A'.
- In step 1, we use **Copy All** operation.
- In step 2, we use **Paste** operation to get 'AA'.
- In step 3, we use **Paste** operation to get 'AAA'.

**Note:**

1. The n will be in the range [1, 1000].

## 题解

依题意可列表

|Input|Operation|Expression|Output|
|---|---|---|---|
|2|C-P|`1*2`|2|
|3|C-P-P|`1*3`|3|
|4|C-P-P-P OR C-P-C-P|`1*4` OR `1*2*2`|4|
|5|C-P-P-P-P|`1*5`|5|
|6|C-P-C-P-P|`1*2*3`|5|
|12|C-P-C-P-C-P-P|`1*2*2*3`|7|

由上表可看出，该题本质上是分解质因数，并对质因数进行累加，即可得到结果。





