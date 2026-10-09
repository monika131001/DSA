// Problem: First Unique Character in a String
// Pattern: Array / String Traversal
// Space Complexity: O(1) for a fixed character set
// Time Complexity: O(n²)
// Key Idea: Store distinct characters in an array using includes(), then use indexOf() and lastIndexOf() to find the first character that appears only once in the original string.

var firstUniqChar = function (s) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (!arr.includes(s[i])) {
            arr.push(s[i]);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (s.indexOf(arr[i]) == s.lastIndexOf(arr[i])) {
            return s.indexOf(arr[i]);
        }
    }
    return -1;
};

console.log(firstUniqChar("leetcode"));
