// Problem: Minimum Operations to Make Array Zero
// Pattern: Set / Counting Distinct Non-Zero Elements
// Space Complexity: O(n)
// Time Complexity: O(n)
// Key Idea: Each operation removes the current smallest non-zero value from all positive elements.
// Therefore, the number of operations equals the number of distinct non-zero values. Use a Set because it automatically removes duplicate values.

function minimumOperations(nums: number[]): number {
    return new Set(nums.filter(num => num !== 0)).size;
}
console.log(minimumOperations([1, 5, 0, 3, 5])); // 3
