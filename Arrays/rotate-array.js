// Problem: Rotate Array
// Pattern: Array / Reversal
// Space Complexity: O(1)
// Time Complexity: O(n)
// Key Idea: Reverse the entire array, then reverse the first k elements and the remaining elements to rotate the array in-place.

var rotate = function(nums, k) {

    k = k % nums.length;

    function reverse(start, end) {
        while (start < end) {
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;

            start++;
            end--;
        }
    }

    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
};
