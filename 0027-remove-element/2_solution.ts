/**
 * 27. Remove Element
 * 
 * Time Complexity:  O(n) - Single pass through the array.
 * Space Complexity: O(1) - In-place modification with zero extra memory.
 * 
 * @param nums - The input array of integers
 * @param val  - The target integer value to remove
 * @returns The count of elements not equal to val (k)
 */
function removeElement(nums: number[], val: number): number {
  // Writer pointer: tracks where the next valid element should be placed
  let k: number = 0;

  // Reader pointer: traverses through every element in the array
  for (let i: number = 0; i < nums.length; i++) {
    // If the current element is NOT the target value to remove
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  // k represents the number of elements not equal to val
  return k;
}

// ----------------- Test Runner / Verification -----------------
function runTests(): void {
  console.log("--- Running Tests for LeetCode 27: Remove Element (TypeScript) ---\n");

  // Test Case 1
  const nums1 = [3, 2, 2, 3];
  const val1 = 3;
  const k1 = removeElement(nums1, val1);
  console.log(`Test 1 -> k = ${k1}, valid prefix = [${nums1.slice(0, k1)}] | Expected: k = 2, prefix = [2, 2]`);

  // Test Case 2
  const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
  const val2 = 2;
  const k2 = removeElement(nums2, val2);
  console.log(`Test 2 -> k = ${k2}, valid prefix = [${nums2.slice(0, k2)}] | Expected: k = 5, prefix = [0, 1, 3, 0, 4]`);

  // Test Case 3: Empty array
  const nums3: number[] = [];
  const val3 = 1;
  const k3 = removeElement(nums3, val3);
  console.log(`Test 3 -> k = ${k3}, valid prefix = [${nums3.slice(0, k3)}] | Expected: k = 0, prefix = []`);

  // Test Case 4: All elements match val
  const nums4 = [7, 7, 7, 7];
  const val4 = 7;
  const k4 = removeElement(nums4, val4);
  console.log(`Test 4 -> k = ${k4}, valid prefix = [${nums4.slice(0, k4)}] | Expected: k = 0, prefix = []`);
}

runTests();
