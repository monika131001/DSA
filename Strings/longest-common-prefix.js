// Problem: Longest Common Prefix
// Pattern: String / Vertical Scanning
// Space Complexity: O(1)
// Time Complexity: O(n * m)
// Key Idea: Compare characters at the same index across all strings and return the prefix before the first mismatch.

function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";

    for (let i = 0; i < strs[0].length; i++) {
        const ch = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== ch) {
                return strs[0].slice(0, i);
            }
        }
    }

    return strs[0];
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
