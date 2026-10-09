// Problem: Top K Frequent Elements
// Pattern: Hash Map / Frequency Counting / Sorting
// Space Complexity: O(n)
// Time Complexity: O(n log n)
// Key Idea: Count each number's frequency using a Map, sort the key-value pairs by frequency in descending order, and return the first k numbers.

var topKFrequent = function(nums, k) {
    nums = nums.sort((a,b) => a-b);              
    const map = new Map();

  for(let i = 0; i < nums.length; i++) {
    if(!map.has(nums[i])){
      map.set(nums[i],1);
    }
    else {
      map.set(nums[i], map.get(nums[i]) + 1);           
    }
  } 

  let result = [...map].sort((a, b) => b[1] - a[1]);

return result.slice(0, k).map(entry => entry[0]);
};

console.log([1,1,1,2,2,3], 2);
