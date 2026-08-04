//Problem: Palindrome number
//Pattern: String / Two pointers
//Time: O(n)
//Space: O(n)
//Key idea: Convert the number to a string, then use two pointers from both ends to compare characters.

var isPalindrome = function(x) {
     if (x < 0) return false;

    let s = String(x);
    let i = 0;
    let j = s.length-1;

    while(i<j) {
        if(s[i] !== s[j]) return false;
        i++;
        j--;
    }
    return true;
};
