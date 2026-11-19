/**
 * 26. Remove Duplicates from Sorted Array
 * 
 * Time Complexity:  O(n) - Single pass through array
 * Space Complexity: O(1) - Modifies array in-place
 * 
 * @param nums - Array of integers sorted in non-decreasing order
 * @returns Number of unique elements (k)
 */
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  // Pointer where the next unique element should be placed
  let writeIndex: number = 1;

  // Scan through array starting from the second element
  for (let readIndex: number = 1; readIndex < nums.length; readIndex++) {
    // When we encounter an element different from the previous unique one
    if (nums[readIndex] !== nums[writeIndex - 1]) {
      nums[writeIndex] = nums[readIndex];
      writeIndex++;
    }
  }

  return writeIndex;
}

// ----------------- Test Runner / Verification -----------------
function runTests(): void {
  console.log("--- Running Tests for LeetCode 26: Remove Duplicates from Sorted Array ---\n");

  // Test 1
  const nums1 = [1, 1, 2];
  const k1 = removeDuplicates(nums1);
  console.log(`Test 1 -> k = ${k1}, unique prefix = [${nums1.slice(0, k1)}] | Expected: k = 2, prefix = [1, 2]`);

  // Test 2
  const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const k2 = removeDuplicates(nums2);
  console.log(`Test 2 -> k = ${k2}, unique prefix = [${nums2.slice(0, k2)}] | Expected: k = 5, prefix = [0, 1, 2, 3, 4]`);

  // Test 3: Array with no duplicates
  const nums3 = [1, 2, 3, 4, 5];
  const k3 = removeDuplicates(nums3);
  console.log(`Test 3 -> k = ${k3}, unique prefix = [${nums3.slice(0, k3)}] | Expected: k = 5, prefix = [1, 2, 3, 4, 5]`);

  // Test 4: Single element array
  const nums4 = [42];
  const k4 = removeDuplicates(nums4);
  console.log(`Test 4 -> k = ${k4}, unique prefix = [${nums4.slice(0, k4)}] | Expected: k = 1, prefix = [42]`);
}

runTests();
