/**
 * 45. Jump Game II
 * 
 * Algorithm: Greedy / BFS Level Window
 * Time Complexity:  O(n) - Single pass through array up to n - 1.
 * Space Complexity: O(1) - Constant auxiliary space.
 * 
 * @param nums - Array representing maximum jump length from each position
 * @returns Minimum number of jumps required to reach the last index
 */
function jump(nums: number[]): number {
  const n: number = nums.length;
  if (n <= 1) return 0;

  let jumps: number = 0;
  let currentEnd: number = 0;
  let farthest: number = 0;

  // We loop up to n - 2 because once we reach or pass n - 1, we are already there
  for (let i: number = 0; i < n - 1; i++) {
    // Continuously update the farthest point reachable from within the current jump range
    farthest = Math.max(farthest, i + nums[i]);

    // When we reach the boundary of our current jump
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;

      // Early break if currentEnd already reaches or passes the last index
      if (currentEnd >= n - 1) {
        break;
      }
    }
  }

  return jumps;
}

// ----------------- Test Runner / Verification -----------------
function runTests(): void {
  console.log("--- Running Tests for LeetCode 45: Jump Game II ---\n");

  // Test 1: Standard case
  const nums1 = [2, 3, 1, 1, 4];
  console.log("Test 1 Result:", jump(nums1), "| Expected: 2");

  // Test 2: Over zeros
  const nums2 = [2, 3, 0, 1, 4];
  console.log("Test 2 Result:", jump(nums2), "| Expected: 2");

  // Test 3: Single element (already at destination)
  const nums3 = [0];
  console.log("Test 3 Result:", jump(nums3), "| Expected: 0");

  // Test 4: Can reach in 1 jump
  const nums4 = [10, 1, 1, 1];
  console.log("Test 4 Result:", jump(nums4), "| Expected: 1");

  // Test 5: Linear jumps
  const nums5 = [1, 1, 1, 1];
  console.log("Test 5 Result:", jump(nums5), "| Expected: 3");
}

runTests();
