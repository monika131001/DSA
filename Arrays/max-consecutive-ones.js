// Problem: Find Max Consecutive Ones
// Pattern: Array / Linear Traversal
// Space Complexity: O(1)
// Time Complexity: O(n)
// Key Idea: Track the current count of consecutive 1s and update the maximum count. Reset the current count to 0 whenever a 0 is encountered.

var findMaxConsecutiveOnes = function(nums) {

    let current = 0;
    let max = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 1){
            current++;
            max = Math.max(current, max);
        }
        else {
            current = 0;
        }
    }
    return max;
};
