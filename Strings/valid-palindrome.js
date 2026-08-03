// Problem: Valid Palindrome
// Pattern: Two Pointers
// Time: O(n)
// Space: O(1)
// Key idea: Use two pointers from both ends, skip non-alphanumeric characters, and compare characters until the pointers meet.

var isPalindrome = function (s) {

    s = s.toLowerCase();
    // let filteredString = "";
    // let reverse = "";
    // for(let i = 0; i < s.length; i++) {
    //     if(s[i].match(/[a-z0-9]/i)) {
    //         filteredString = filteredString + s[i];
    //         reverse = s[i] + reverse;
    //     }
    // }
    // return filteredString === reverse;

    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (!s[i].match(/[a-z0-9]/)) {
            i++;
        }
        else if (!s[j].match(/[a-z0-9]/)) {
            j--;
        }
        else if (s[i] === s[j]) {
            i++;
            j--;
        }
        else {
            return false;
        }
    }
    return true;
};
