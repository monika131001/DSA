// Problem: Sort an Array
// Pattern: Merge Sort / Divide and Conquer
// Time Complexity: O(n log n)
// Space Complexity: O(n)
// Key Idea: Recursively divide the array into halves, sort each half, and merge the two sorted halves.

var sortArray = function (nums) {
    if (nums.length <= 1) return nums;

    let mid = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, mid));
    let right = sortArray(nums.slice(mid));

    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        }
        else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i), right.slice(j));
};

console.log(sortArray([5,2,3,1,8]));
