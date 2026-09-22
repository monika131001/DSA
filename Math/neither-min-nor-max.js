// Problem: Neither minimum nor maximum number
// Pattern: Array / Minimum & Maximum
// Time: O(n)
// Space: O(1)
// Key idea: Find min and max, return the element which is neither min nor max.

var findNonMinOrMax = function(nums) {
    if(nums.length <= 2) return -1;

    let min = Math.min(...nums);
    let max = Math.max(...nums);

    for(let i = 0; i< nums.length; i++) {
        if(nums[i] !== min && nums[i] !==  max) {
            return nums[i];
        }
    }
        
    return -1;
};
