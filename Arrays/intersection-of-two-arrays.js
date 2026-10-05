// Problem: Intersection of Two Arrays
// Pattern: Hash Set / Array
// Space Complexity: O(n)
// Time Complexity: O(n²) for Approach 1, O(n) average for Approach 2
// Key Idea: Find common unique elements; using a Set provides faster membership checks and automatically handles duplicates.

//Approach 1: Using array 
var intersection = function(nums1, nums2) {
  let result = [];
  for(let i = 0; i < nums1.length; i++) {
    if(nums2.includes(nums1[i]) && !result.includes(nums1[i])){
      result.push(nums1[i]);
      }      
  }
  return result;
};

//Approach 2: using set
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const result = new Set();

    for (const num of nums2) {
        if (set1.has(num)) result.add(num);
    }
    return [...result];
};

console.log(intersection([4,9,5],[9,4,9,8,4]));
