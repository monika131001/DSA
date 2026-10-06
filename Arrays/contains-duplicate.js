// Problem: Contains Duplicate
// Pattern: Array / Hash Set
// Space Complexity: O(n)
// Time Complexity: O(n)
// Key Idea: Store each number in a Set and return true when a duplicate is found.

function containsDuplicate(nums: number[]): boolean {
  const set = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true; 
    }
    set.add(nums[i]);
  }
  return false; 
}

console.log(containsDuplicate([1, 2, 3]));    // false
console.log(containsDuplicate([1, 2, 3, 1])); // true
