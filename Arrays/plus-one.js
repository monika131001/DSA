// Problem: Plus One
// Pattern: Array / Carry
// Time: O(n)
// Space: O(1)
// Key idea: Traverse the array from right to left. If the digit is less than 9, increment it and return. 
// If the digit is 9, set it to 0 and continue to the previous digit. If all digits are 9, add 1 at the beginning.

var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
};
