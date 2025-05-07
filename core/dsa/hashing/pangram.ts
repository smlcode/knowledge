// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

function checkIfPangram(sentence: string): boolean {
    //Create a set of the sentence
    //Loop through alphabet
    //Check if the alphabet value is in sentence.
    //if value is not in sentence return false
    //if loop completes, true

    const englishAlphabet: string = "abcdefghijklmnopqrstuvwxyz";
    const sentenceToCheckSet: Set<string> = new Set(sentence);

    for(let letter of englishAlphabet) {
        if(!sentenceToCheckSet.has(letter)) {
            return false;
        }
    }

    return true;
};