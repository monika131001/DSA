// Problem: Bubble Sort
// Pattern: Sorting / Nested Loops
// Time: O(n²)
// Space: O(1)
// Key idea: Compare adjacent elements and swap them if they are in the wrong order. 
// After each pass, the largest unsorted element moves to the end, so the comparison range decreases.


function bubble(nums){

  for(let i = 0; i< nums.length; i++) {
    for(let j = 0; j < nums.length - 1 - i; j++){
      if(nums[j] > nums[j+1]) {
        let temp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = temp;
      }
    }  
  }
  return nums;  
}
console.log(bubble([5, 3, 8, 1, 2]));
