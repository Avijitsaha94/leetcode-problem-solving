/**
 * 121. Best Time to Buy and Sell Stock
 * 
 * Algorithm: Greedy / One Pass Tracking
 * Time Complexity:  O(n) - Single pass through the prices array.
 * Space Complexity: O(1) - Constant auxiliary space.
 * 
 * @param prices - Array of stock prices per day
 * @returns Maximum achievable profit (or 0 if no profit possible)
 */
function maxProfit(prices: number[]): number {
  let minPrice: number = Infinity;
  let maxProfit: number = 0;

  for (let i: number = 0; i < prices.length; i++) {
    const currentPrice: number = prices[i];

    // If current price is a new lowest buying price, update minPrice
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    } else {
      // Otherwise, evaluate potential profit if sold today
      const currentProfit: number = currentPrice - minPrice;
      if (currentProfit > maxProfit) {
        maxProfit = currentProfit;
      }
    }
  }

  return maxProfit;
}

// ----------------- Test Runner / Verification -----------------
function runTests(): void {
  console.log("--- Running Tests for LeetCode 121: Best Time to Buy and Sell Stock ---\n");

  // Test 1
  const prices1 = [7, 1, 5, 3, 6, 4];
  console.log("Test 1 Result:", maxProfit(prices1), "| Expected: 5");

  // Test 2: Decreasing prices
  const prices2 = [7, 6, 4, 3, 1];
  console.log("Test 2 Result:", maxProfit(prices2), "| Expected: 0");

  // Test 3: Single price
  const prices3 = [10];
  console.log("Test 3 Result:", maxProfit(prices3), "| Expected: 0");

  // Test 4: Valley and Peak
  const prices4 = [2, 4, 1, 7];
  console.log("Test 4 Result:", maxProfit(prices4), "| Expected: 6 (Buy at 1, Sell at 7)");
}

runTests();
