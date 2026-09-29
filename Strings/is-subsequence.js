// Problem: Is Subsequence
// Pattern: Two Pointers / String
// Space Complexity: O(1)
// Time Complexity: O(n)
// Key Idea: Use two pointers to scan t and advance the s pointer whenever matching characters are found.

var isSubsequence = function(s, t) {
    let result = "";
  let j  = 0;
    for(let i = 0; i < t.length; i++) {
        if(t[i] == s[j]) {
            
          j++;
        }
    }    
    return j == s.length;
}
  console.log(isSubsequence("abc","ahcbgd"));
