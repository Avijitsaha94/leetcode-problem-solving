/**
 * 189. Rotate Array
 * 
 * Algorithm: Array Reversal Algorithm (3-step reverse)
 * Time Complexity:  O(n) - Linear pass through array elements.
 * Space Complexity: O(1) - Modified strictly in-place.
 * 
 * @param nums - The array of numbers to rotate
 * @param k    - Number of rotation steps to the right
 * @returns void (modifies nums in-place)
 */
function rotate(nums: number[], k: number): void {
  const n: number = nums.length;
  // If k is greater than array length, normalize it with modulo
  k = k % n;
  if (k === 0) return;

  // Helper function to reverse a subarray in-place using two pointers
  function reverse(start: number, end: number): void {
    while (start < end) {
      const temp: number = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }

  // Step 1: Reverse the entire array
  reverse(0, n - 1);

  // Step 2: Reverse the first k elements
  reverse(0, k - 1);

  // Step 3: Reverse the remaining n - k elements
  reverse(k, n - 1);
}

// ----------------- Test Runner / Verification -----------------
function runTests(): void {
  console.log("--- Running Tests for LeetCode 189: Rotate Array ---\n");

  // Test 1
  const nums1 = [1, 2, 3, 4, 5, 6, 7];
  rotate(nums1, 3);
  console.log("Test 1 Result:", nums1, "| Expected: [5, 6, 7, 1, 2, 3, 4]");

  // Test 2
  const nums2 = [-1, -100, 3, 99];
  rotate(nums2, 2);
  console.log("Test 2 Result:", nums2, "| Expected: [3, 99, -1, -100]");

  // Test 3: k > length
  const nums3 = [1, 2];
  rotate(nums3, 5); // 5 % 2 = 1 -> [2, 1]
  console.log("Test 3 Result:", nums3, "| Expected: [2, 1]");

  // Test 4: k = 0
  const nums4 = [1, 2, 3];
  rotate(nums4, 0);
  console.log("Test 4 Result:", nums4, "| Expected: [1, 2, 3]");
}

runTests();
