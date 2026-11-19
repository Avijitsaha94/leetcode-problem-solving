/**
 * 80. Remove Duplicates from Sorted Array II
 * 
 * Time Complexity:  O(n) - Single pass through array
 * Space Complexity: O(1) - Modifies array in-place
 * 
 * @param nums - Sorted integer array
 * @returns Length of valid prefix (k) with at most 2 duplicates per element
 */
function removeDuplicates(nums: number[]): number {
  // If array has 2 or fewer elements, all elements are already allowed
  if (nums.length <= 2) return nums.length;

  // Pointer where the next allowed element will be written
  // The first two elements (indices 0 and 1) are always valid
  let writeIndex: number = 2;

  // Scan through array starting from index 2
  for (let readIndex: number = 2; readIndex < nums.length; readIndex++) {
    // Current number cannot match the element 2 positions back in our valid prefix
    if (nums[readIndex] !== nums[writeIndex - 2]) {
      nums[writeIndex] = nums[readIndex];
      writeIndex++;
    }
  }

  return writeIndex;
}

// ----------------- Test Runner / Verification -----------------
function runTests(): void {
  console.log("--- Running Tests for LeetCode 80: Remove Duplicates from Sorted Array II ---\n");

  // Test 1
  const nums1 = [1, 1, 1, 2, 2, 3];
  const k1 = removeDuplicates(nums1);
  console.log(`Test 1 -> k = ${k1}, prefix = [${nums1.slice(0, k1)}] | Expected: k = 5, prefix = [1, 1, 2, 2, 3]`);

  // Test 2
  const nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
  const k2 = removeDuplicates(nums2);
  console.log(`Test 2 -> k = ${k2}, prefix = [${nums2.slice(0, k2)}] | Expected: k = 7, prefix = [0, 0, 1, 1, 2, 3, 3]`);

  // Test 3: Array with 2 or fewer elements
  const nums3 = [1, 1];
  const k3 = removeDuplicates(nums3);
  console.log(`Test 3 -> k = ${k3}, prefix = [${nums3.slice(0, k3)}] | Expected: k = 2, prefix = [1, 1]`);

  // Test 4: All same elements
  const nums4 = [5, 5, 5, 5, 5];
  const k4 = removeDuplicates(nums4);
  console.log(`Test 4 -> k = ${k4}, prefix = [${nums4.slice(0, k4)}] | Expected: k = 2, prefix = [5, 5]`);
}

runTests();
