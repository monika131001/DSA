// Problem: Search Insert Position
// Pattern: Binary Search
// Time: O(log n)
// Space: O(1)
// Key idea: Use binary search to find the target. If the target is not found,
// left ends at the position where the target should be inserted.

var searchInsert = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
    let mid = Math.floor((right + left) / 2);
        if (nums[mid] == target) {
            return mid;
        }
        else if (target > nums[mid]) {
            left = mid+1;
        }
        else {
            right = mid-1;
        }
    }
      return left;    
};
