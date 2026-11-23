/**
 * 169. Majority Element
 * 
 * Algorithm: Boyer-Moore Voting Algorithm
 * Time Complexity:  O(n) - Single pass through the array.
 * Space Complexity: O(1) - Constant auxiliary memory.
 * 
 * @param nums - Array of integers containing a majority element
 * @returns The majority element
 */
function majorityElement(nums: number[]): number {
  let candidate: number = 0;
  let count: number = 0;

  for (const num of nums) {
    // If current count drops to 0, pick current number as new candidate
    if (count === 0) {
      candidate = num;
    }

    // If current number matches candidate, vote +1; otherwise vote -1
    count += (num === candidate) ? 1 : -1;
  }

  return candidate;
}

// ----------------- Test Runner / Verification -----------------
function runTests(): void {
  console.log("--- Running Tests for LeetCode 169: Majority Element ---\n");

  // Test 1
  const nums1 = [3, 2, 3];
  console.log("Test 1 Result:", majorityElement(nums1), "| Expected: 3");

  // Test 2
  const nums2 = [2, 2, 1, 1, 1, 2, 2];
  console.log("Test 2 Result:", nums2.length, "elements ->", majorityElement(nums2), "| Expected: 2");

  // Test 3: Single element
  const nums3 = [1];
  console.log("Test 3 Result:", majorityElement(nums3), "| Expected: 1");

  // Test 4: Negative numbers
  const nums4 = [-1, 1, 1, 1, 2, 1];
  console.log("Test 4 Result:", majorityElement(nums4), "| Expected: 1");
}

runTests();
