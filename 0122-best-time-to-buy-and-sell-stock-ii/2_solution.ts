/**
 * 122. Best Time to Buy and Sell Stock II
 * 
 * Algorithm: Greedy / Consecutive Daily Gains
 * Time Complexity:  O(n) - Single pass through the prices array.
 * Space Complexity: O(1) - Constant auxiliary space.
 * 
 * @param prices - Array of daily stock prices
 * @returns Maximum total profit from multiple transactions
 */
function maxProfit(prices: number[]): number {
  let totalProfit: number = 0;

  // Whenever today's price is higher than yesterday's, capture the gain
  for (let i: number = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      totalProfit += prices[i] - prices[i - 1];
    }
  }

  return totalProfit;
}

// ----------------- Test Runner / Verification -----------------
function runTests(): void {
  console.log("--- Running Tests for LeetCode 122: Best Time to Buy and Sell Stock II ---\n");

  // Test 1: Fluctuating prices
  const prices1 = [7, 1, 5, 3, 6, 4];
  console.log("Test 1 Result:", maxProfit(prices1), "| Expected: 7");

  // Test 2: Strictly increasing prices
  const prices2 = [1, 2, 3, 4, 5];
  console.log("Test 2 Result:", maxProfit(prices2), "| Expected: 4");

  // Test 3: Strictly decreasing prices
  const prices3 = [7, 6, 4, 3, 1];
  console.log("Test 3 Result:", maxProfit(prices3), "| Expected: 0");

  // Test 4: Single day
  const prices4 = [10];
  console.log("Test 4 Result:", maxProfit(prices4), "| Expected: 0");
}

runTests();
