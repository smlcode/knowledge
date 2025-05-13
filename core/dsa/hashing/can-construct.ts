// Input: ransomNote = "aa", magazine = "aab"
// Output: true

function canConstruct(ransomNote: string, magazine: string): boolean {

    //Intuition
    //Using Maps
    //Map of magazine char and times used
    // [a, 2]

    //loop thru reanzomNote
    //check the curr char against chars.
    //if has char and value > 0 decrement it from map.
    //if doesn't have char or value is < 1 return false.
    //else if loops completes return true

    const magazineCharsCount: Map<string, number> = new Map();
    for (let char of magazine) {
        magazineCharsCount.set(char, (magazineCharsCount.get(char) ?? 0) + 1);
    }

    for (let char of ransomNote) {
        if(magazineCharsCount.get(char)) {
            magazineCharsCount.set(char, magazineCharsCount.get(char) - 1);
        } else {
            return false;
        }
    }

    return true;
};