// Problem: Separate the Digits in an Array
// Pattern: Array / Digit Extraction
// Space Complexity: O(n)
// Time Complexity: O(n * d)
// Key Idea: Convert each number to a string, split it into individual digits, convert them back to numbers, and push them into the result array.

var separateDigits = function (nums) {

    let array = [];

    for (let i = 0; i < nums.length; i++) {
        const digits = nums[i].toString().split("").map(Number);
        array.push(...digits);
    }
    return array;
};

console.log(separateDigits([13,25,83,77]));
