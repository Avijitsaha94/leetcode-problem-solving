# 169. Majority Element

- **Difficulty:** Easy
- **Category:** Array, Hash Table, Counting, Divide and Conquer, Boyer-Moore Voting Algorithm
- **LeetCode Reference:** [LeetCode 169 - Majority Element](https://leetcode.com/problems/majority-element/)

---

### Problem Summary

Given an array `nums` of size `n`, return the **majority element**.

The majority element is defined as the element that appears **more than $\lfloor n / 2 \rfloor$ times**. You may assume that the majority element always exists in the array.

---

### Examples

#### Example 1:
- **Input:** `nums = [3, 2, 3]`
- **Output:** `3`
- **Explanation:** The array length is 3. $\lfloor 3 / 2 \rfloor = 1$. The number 3 appears 2 times ($2 > 1$), so it is the majority element.

#### Example 2:
- **Input:** `nums = [2, 2, 1, 1, 1, 2, 2]`
- **Output:** `2`
- **Explanation:** The array length is 7. $\lfloor 7 / 2 \rfloor = 3$. The number 2 appears 4 times ($4 > 3$), so it is the majority element.

---

### Constraints:
- `n == nums.length`
- `1 <= n <= 5 * 10^4`
- `-10^9 <= nums[i] <= 10^9`

---

### Follow-up:
Could you solve the problem in linear time $O(n)$ and in $O(1)$ space?
