// Problem: Reverse String
// Pattern: Two Pointers
// Time: O(n)
// Space: O(1)
// Key idea: Use two pointers from both ends and swap characters until they reach the middle.

var reverseString = function(s) {
    let length = s.length;
    let halfLength = Math.floor(length / 2);

    for(let i = 0; i < halfLength; i++) {
        let temp = s[i];
        s[i] = s[length - 1 - i];
        s[length - 1 - i] = temp;
    }

};
