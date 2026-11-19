/**
 * 88. Merge Sorted Array
 * 
 * Time Complexity:  O(m + n) - Each element is placed exactly once.
 * Space Complexity: O(1)     - Modified in-place without auxiliary memory.
 * 
 * @param nums1 - The destination array with capacity (m + n)
 * @param m     - Number of initial initialized elements in nums1
 * @param nums2 - The source array to merge from
 * @param n     - Number of elements in nums2
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // Pointer for the last valid element in nums1
  let p1: number = m - 1;

  // Pointer for the last valid element in nums2
  let p2: number = n - 1;

  // Pointer for the current insertion position from the end of nums1
  let p: number = m + n - 1;

  // Continue while there are still elements in nums2 to place
  while (p2 >= 0) {
    // If nums1 has elements remaining and its element is larger
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      // Either nums1 is exhausted OR nums2[p2] >= nums1[p1]
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }
}

// ----------------- Test Runner / Verification -----------------
// function runTests(): void {
//   console.log("--- Running Tests for LeetCode 88: Merge Sorted Array (TypeScript) ---\n");

//   // Test Case 1
//   const nums1_1 = [1, 2, 3, 0, 0, 0];
//   merge(nums1_1, 3, [2, 5, 6], 3);
//   console.log("Test 1 Result:", nums1_1, "| Expected: [1, 2, 2, 3, 5, 6]");

//   // Test Case 2
//   const nums1_2 = [1];
//   merge(nums1_2, 1, [], 0);
//   console.log("Test 2 Result:", nums1_2, "| Expected: [1]");

//   // Test Case 3
//   const nums1_3 = [0];
//   merge(nums1_3, 0, [1], 1);
//   console.log("Test 3 Result:", nums1_3, "| Expected: [1]");

//   // Test Case 4 (nums2 all smaller)
//   const nums1_4 = [4, 5, 6, 0, 0, 0];
//   merge(nums1_4, 3, [1, 2, 3], 3);
//   console.log("Test 4 Result:", nums1_4, "| Expected: [1, 2, 3, 4, 5, 6]");
// }

// // Execute tests if executed directly
// runTests();
