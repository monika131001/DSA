// Problem: Ransom Note
// Pattern: Hash Map / Frequency Counting
// Space Complexity: O(1)
// Time Complexity: O(n + m)
// Key Idea: Count the frequency of characters in magazine and use them to construct ransomNote.

function canConstruct(ransomNote: string, magazine: string): boolean {

    if(magazine.length < ransomNote.length) return false;

    let magazineArray: string[] = magazine.split("");

    for(let i = 0; i < ransomNote.length; i++) {
        let index : number = magazineArray.indexOf(ransomNote[i]);
        if(index === -1) return false;

        magazineArray.splice(index, 1);
    }    
    return true;
};

console.log(canConstruct("aa", "aab"));
