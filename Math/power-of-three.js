// Problem: Power of Three
// Pattern: Recursion
// Space Complexity: O(log₃ n)
// Time Complexity: O(log₃ n)
// Key Idea: Reject non-positive numbers, return true when n equals 1, and return false if n is not divisible by 3. Otherwise, recursively divide n by 3 until it reaches 1.

var isPowerOfThree = function(n) {

    if(n <= 0) return false;
    if(n == 1) return true;
    if(n%3 !== 0) return false;
    return isPowerOfThree(n/3);
};

console.log(isPowerOfThree(27));
