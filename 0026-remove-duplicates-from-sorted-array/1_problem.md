# 26. Remove Duplicates from Sorted Array

- **Difficulty:** Easy
- **Category:** Arrays, Two Pointers
- **LeetCode Reference:** [LeetCode 26 - Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

---

### Problem Summary

Given an integer array `nums` sorted in **non-decreasing order**, remove duplicates **in-place** so that each unique element appears only once. The relative order of unique elements must be preserved.

Return the count of unique elements, denoted as `k`. The first `k` elements of `nums` must hold these unique values in sorted order. Elements past index `k - 1` do not matter.

---

### Examples

#### Example 1:
- **Input:** `nums = [1, 1, 2]`
- **Output:** `k = 2`, `nums = [1, 2, _]`
- **Explanation:** There are 2 unique elements (1 and 2). The first two elements of `nums` are updated to `[1, 2]`.

#### Example 2:
- **Input:** `nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]`
- **Output:** `k = 5`, `nums = [0, 1, 2, 3, 4, _, _, _, _, _]`
- **Explanation:** There are 5 unique elements. The first five positions of `nums` become `[0, 1, 2, 3, 4]`.

---

### Constraints:
- `1 <= nums.length <= 3 * 10^4`
- `-100 <= nums[i] <= 100`
- `nums` is sorted in non-decreasing order.
