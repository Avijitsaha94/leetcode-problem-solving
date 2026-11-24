/**
 * 55. Jump Game
 * 
 * Algorithm: Greedy (Max Reachable Index)
 * Time Complexity:  O(n) - Single pass through the array.
 * Space Complexity: O(1) - Constant auxiliary space.
 * 
 * @param nums - Array representing maximum jump length from each position
 * @returns true if last index is reachable, false otherwise
 */
function canJump(nums: number[]): boolean {
  let maxReach: number = 0;

  for (let i: number = 0; i < nums.length; i++) {
    // If the current index is beyond the maximum reach we could ever achieve
    if (i > maxReach) {
      return false;
    }

    // Update the farthest index we can reach from here
    maxReach = Math.max(maxReach, i + nums[i]);

    // Early exit: if we can already reach or exceed the last index
    if (maxReach >= nums.length - 1) {
      return true;
    }
  }

  return true;
}

// ----------------- Test Runner / Verification -----------------
function runTests(): void {
  console.log("--- Running Tests for LeetCode 55: Jump Game ---\n");

  // Test 1: Reachable
  const nums1 = [2, 3, 1, 1, 4];
  console.log("Test 1 Result:", canJump(nums1), "| Expected: true");

  // Test 2: Unreachable (trapped by zero)
  const nums2 = [3, 2, 1, 0, 4];
  console.log("Test 2 Result:", canJump(nums2), "| Expected: false");

  // Test 3: Single element (already at last index)
  const nums3 = [0];
  console.log("Test 3 Result:", canJump(nums3), "| Expected: true");

  // Test 4: Jump directly over zeros
  const nums4 = [2, 0, 0];
  console.log("Test 4 Result:", canJump(nums4), "| Expected: true");
}

runTests();
