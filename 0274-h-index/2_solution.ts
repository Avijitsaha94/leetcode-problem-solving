/**
 * 274. H-Index
 * 
 * Algorithm: Bucket / Counting Sort
 * Time Complexity:  O(n) - Single pass to fill buckets, single pass to accumulate.
 * Space Complexity: O(n) - Auxiliary array of size (n + 1).
 * 
 * @param citations - Array of citation counts for each paper
 * @returns The researcher's h-index
 */
function hIndex(citations: number[]): number {
  const n: number = citations.length;
  // buckets[i] counts how many papers have exactly i citations
  // buckets[n] counts how many papers have n or more citations
  const buckets: number[] = new Array(n + 1).fill(0);

  for (const c of citations) {
    if (c >= n) {
      buckets[n]++;
    } else {
      buckets[c]++;
    }
  }

  // Traverse from highest possible h-index (n) down to 0
  let totalPapers: number = 0;
  for (let h: number = n; h >= 0; h--) {
    totalPapers += buckets[h];
    // If we have found at least h papers with at least h citations
    if (totalPapers >= h) {
      return h;
    }
  }

  return 0;
}

// ----------------- Test Runner / Verification -----------------
function runTests(): void {
  console.log("--- Running Tests for LeetCode 274: H-Index ---\n");

  // Test 1: Standard case
  const citations1 = [3, 0, 6, 1, 5];
  console.log("Test 1 Result:", hIndex(citations1), "| Expected: 3");

  // Test 2: Small citation numbers
  const citations2 = [1, 3, 1];
  console.log("Test 2 Result:", hIndex(citations2), "| Expected: 1");

  // Test 3: All zeros
  const citations3 = [0, 0, 0];
  console.log("Test 3 Result:", hIndex(citations3), "| Expected: 0");

  // Test 4: All citations higher than paper count
  const citations4 = [100, 200, 300];
  console.log("Test 4 Result:", hIndex(citations4), "| Expected: 3");

  // Test 5: Single paper with 0 citations
  const citations5 = [0];
  console.log("Test 5 Result:", hIndex(citations5), "| Expected: 0");
}

runTests();
