// Problem: Length of Last Word
// Pattern: String Traversal
// Time: O(n)
// Space: O(1)
// Key idea: Trim the string, then traverse it from left to right.
// Count characters of the current word and reset the count when a space is found.
// The final count represents the length of the last word.

var lengthOfLastWord = function(s) {
    s = s.trim();
    let count=0;
    for(let i = 0; i <s.length; i++) {
        if(s[i] !== " ") {
            count++;
        }
        else{
            count = 0;
        }
    }
    return count;
};
