/**
 * 380. Insert Delete GetRandom O(1)
 * 
 * Algorithm: Array + Hash Map with Swap-with-Last Deletion
 * Time Complexity:
 *   - insert:    Average O(1)
 *   - remove:    Average O(1)
 *   - getRandom: Average O(1)
 * Space Complexity: O(n) - Storing n elements in an array and a map.
 */
class RandomizedSet {
  private list: number[];
  private map: Map<number, number>; // val -> index in list

  constructor() {
    this.list = [];
    this.map = new Map<number, number>();
  }

  insert(val: number): boolean {
    if (this.map.has(val)) {
      return false;
    }

    // Append to end of array and record its index in the map
    this.map.set(val, this.list.length);
    this.list.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) {
      return false;
    }

    const indexToRemove: number = this.map.get(val)!;
    const lastElement: number = this.list[this.list.length - 1];

    // Swap the element to remove with the last element
    this.list[indexToRemove] = lastElement;
    this.map.set(lastElement, indexToRemove);

    // Remove the last element in O(1)
    this.list.pop();
    this.map.delete(val);

    return true;
  }

  getRandom(): number {
    const randomIndex: number = Math.floor(Math.random() * this.list.length);
    return this.list[randomIndex];
  }
}

// ----------------- Test Runner / Verification -----------------
function runTests(): void {
  console.log("--- Running Tests for LeetCode 380: Insert Delete GetRandom O(1) ---\n");

  const set = new RandomizedSet();
  console.log("Insert 1:", set.insert(1), "| Expected: true");
  console.log("Remove 2:", set.remove(2), "| Expected: false");
  console.log("Insert 2:", set.insert(2), "| Expected: true");

  const rand1 = set.getRandom();
  console.log("GetRandom (should be 1 or 2):", rand1, "| Valid:", rand1 === 1 || rand1 === 2);

  console.log("Remove 1:", set.remove(1), "| Expected: true");
  console.log("Insert 2 (duplicate):", set.insert(2), "| Expected: false");
  console.log("GetRandom (must be 2):", set.getRandom(), "| Expected: 2");
}

runTests();
