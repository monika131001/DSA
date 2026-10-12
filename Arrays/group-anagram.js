// Problem: Group Anagrams
// Pattern: Hash Map / Sorting
// Space Complexity: O(n × k)
// Time Complexity: O(n × k log k)
// Key Idea: Sort each string's characters to create a common key for anagrams. Use a hash map to group strings with the same sorted key, then return all groups using Object.values().

var groupAnagrams = function (strs) {
    let map = {};
    for (let i = 0; i < strs.length; i++) {
        let key = strs[i].split("").sort().join("");

        if (!map[key]) {
            map[key] = [strs[i]];

        } else {
            map[key].push(strs[i]);
        }
    }
    return Object.values(map);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
