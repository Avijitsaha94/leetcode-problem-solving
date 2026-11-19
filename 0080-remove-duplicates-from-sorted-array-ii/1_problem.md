# 80. Remove Duplicates from Sorted Array II

- **Difficulty:** Medium
- **Category:** Arrays, Two Pointers
- **LeetCode Reference:** [LeetCode 80 - Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)

---

### Problem Summary

Given an integer array `nums` sorted in **non-decreasing order**, remove duplicates **in-place** such that each unique element appears **at most twice**. The relative order of the elements must be kept the same.

Return `k` after placing the final result in the first `k` slots of `nums`. Elements beyond the returned `k` do not matter.

---

### Examples

#### Example 1:
- **Input:** `nums = [1, 1, 1, 2, 2, 3]`
- **Output:** `k = 5`, `nums = [1, 1, 2, 2, 3, _]`
- **Explanation:** The function should return `k = 5`, with the first five elements being `1, 1, 2, 2, 3`. The third `1` is removed.

#### Example 2:
- **Input:** `nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]`
- **Output:** `k = 7`, `nums = [0, 0, 1, 1, 2, 3, 3, _, _]`
- **Explanation:** The function returns `k = 7`, keeping at most two copies of each number: two 0s, two 1s, one 2, and two 3s.

---

### Constraints:
- `1 <= nums.length <= 3 * 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` is sorted in non-decreasing order.
