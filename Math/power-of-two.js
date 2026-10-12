// Problem: Power of Two
// Pattern: Bit Manipulation / Recursion
// Space Complexity: O(1) for bit manipulation; O(log n) for recursion
// Time Complexity: O(1) for bit manipulation; O(log n) for recursion
// Key Idea: A positive power of two has exactly one set bit in binary. The expression n & (n - 1) removes the rightmost set bit, so the result is zero only for powers of two. Alternatively, recursively divide n by 2 until it reaches 1, rejecting non-positive or odd values other than 1.

var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n-1)) == 0;
};

var isPowerOfTwo = function(n) {
    if (n <= 0) return false;
    if(n == 1) return true;
    if(n%2 != 0) return false;
    return isPowerOfTwo(n/2);
};

console.log(isPowerOfTwo(16));
