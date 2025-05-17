// Input: s = "leEeetcode"
// Output: "leetcode"

//0 <= i <= s.length - 2
// s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
function makeGood(s: string): string {
    if(s.length < 2) {
        return s;
    }

    let goodStack: string[] = [];
    let sChars: string[] = s.split('');
    let prev: string = '';

    for (let i = 0; i < sChars.length; i++) {
        let curr = sChars[i];

        if (prev && prev !== curr && isSameChar(prev,curr)) {
            goodStack.pop();
        } else {
            goodStack.push(curr);
        }

        prev = goodStack.at(-1);
    }

    return goodStack.join('');
};

function isSameChar(a: string, b: string): boolean {
    return a.toLowerCase() === b.toLowerCase();
}