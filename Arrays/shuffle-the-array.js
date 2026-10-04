// Problem: Shuffle the Array
// Pattern: Array / Two Pointers
// Space Complexity: O(n)
// Time Complexity: O(n)
// Key Idea: Use two pointers, starting at index 0 and index n, to alternately add elements from both halves into the result array.

var shuffle = function (nums, n) {
    const array = [];
    let i = 0;
    let j = n;

    while (i < n) {
        array.push(nums[i], nums[j]);
        i++;
        j++;
    }
    return array;
};

console.log(shuffle([2,5,1,3,4,7],3));
