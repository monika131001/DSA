// Problem: Linear Search
// Pattern: Array / Searching
// Time: O(n)
// Space: O(1)
// Key idea: Traverse the array and compare each element with the target.

function linearSearch(nums, target) {

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] == target) return i;
  }
  return -1;
  
}
console.log(linearSearch([8, 9, 5, 7, 0], 10))
