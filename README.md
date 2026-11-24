# 🚀 LeetCode Problem Solving & Pattern Mastery

A systematic, junior-friendly approach to mastering Data Structures, Algorithms, and LeetCode problem patterns using **TypeScript**.

---

## 🎯 Learning Philosophy

Instead of memorizing solutions, this repository focuses on **Pattern Recognition** and **First-Principles Problem Solving**:
1. **Identify the Pattern:** Learn the specific keywords, constraints, and clues that reveal the optimal algorithm.
2. **From Brute Force to Optimal:** Understand why brute force is inefficient and where the bottleneck lies.
3. **Step-by-Step Logic Breakdown:** Explain solutions in simple terms with real-world analogies.
4. **Visual Dry Run:** Trace variable states step-by-step through execution tables.
5. **Pattern Transfer:** Apply the same mental model to similar LeetCode problems.

---

## 📁 Problem Structure

Each problem is organized in its own directory:

```text
├── 0001-two-sum/
│   ├── 1_problem.md          # LeetCode description, constraints & examples
│   ├── 2_solution.ts         # TypeScript optimal solution with test cases
│   └── 3_explanation.md      # Deep dive, pattern intuition & junior dev guide (বাংলা)
```

---

## 📊 Solved Problems Tracker

| # | Problem | Difficulty | Category / Pattern | Solution | Explanation |
|:---:|:---|:---:|:---|:---:|:---:|
| 88 | [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) | Easy | Two Pointers (Backward) | [TypeScript](./0088-merge-sorted-array/2_solution.ts) | [Explanation (বাংলা)](./0088-merge-sorted-array/3_explanation.md) |
| 27 | [Remove Element](https://leetcode.com/problems/remove-element/) | Easy | Two Pointers (Reader & Writer) | [TypeScript](./0027-remove-element/2_solution.ts) | [Explanation (বাংলা)](./0027-remove-element/3_explanation.md) |
| 26 | [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | Easy | Two Pointers (Reader & Writer) | [TypeScript](./0026-remove-duplicates-from-sorted-array/2_solution.ts) | [Explanation (বাংলা)](./0026-remove-duplicates-from-sorted-array/3_explanation.md) |
| 80 | [Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/) | Medium | Two Pointers (Lookback-K) | [TypeScript](./0080-remove-duplicates-from-sorted-array-ii/2_solution.ts) | [Explanation (বাংলা)](./0080-remove-duplicates-from-sorted-array-ii/3_explanation.md) |
| 169 | [Majority Element](https://leetcode.com/problems/majority-element/) | Easy | Boyer-Moore Voting Algorithm | [TypeScript](./0169-majority-element/2_solution.ts) | [Explanation (বাংলা)](./0169-majority-element/3_explanation.md) |
| 189 | [Rotate Array](https://leetcode.com/problems/rotate-array/) | Medium | Array Reversal Technique | [TypeScript](./0189-rotate-array/2_solution.ts) | [Explanation (বাংলা)](./0189-rotate-array/3_explanation.md) |
| 121 | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | Easy | Greedy / One Pass Tracking | [TypeScript](./0121-best-time-to-buy-and-sell-stock/2_solution.ts) | [Explanation (বাংলা)](./0121-best-time-to-buy-and-sell-stock/3_explanation.md) |
| 122 | [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) | Medium | Greedy / Cumulative Gains | [TypeScript](./0122-best-time-to-buy-and-sell-stock-ii/2_solution.ts) | [Explanation (বাংলা)](./0122-best-time-to-buy-and-sell-stock-ii/3_explanation.md) |
| 55 | [Jump Game](https://leetcode.com/problems/jump-game/) | Medium | Greedy / Max Reach | [TypeScript](./0055-jump-game/2_solution.ts) | [Explanation (বাংলা)](./0055-jump-game/3_explanation.md) |

---

## 🛠️ How to Run Locally

You can run any TypeScript solution directly using Node.js:

```bash
# Run TypeScript solution directly
node "0088-merge-sorted-array/2_solution.ts"
```
