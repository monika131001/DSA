//Problem: Find the Index of the First Occurrence in a String
//Pattern: String / Brute Force
//Time: O(n * m)
//Space:  O(1)
//Key: Check each possible starting position in haystack and compare it with needle character by character.

var strStr = function (haystack, needle) {
    let n = haystack.length;
    let m = needle.length;

    for(let i = 0; i <= n - m; i++) {
        let j = 0;
        for(j = 0; j < m; j++) {
            if(haystack[i+j] !== needle[j]){
                break;
            }
        }
        if(j === m) {
            return i;
        }
    }
    return -1;
};
