//Given a string s, find the length of the longest substring without duplicate characters.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.


function lengthOfLongestSubstring(s: string): number {

    //Try using a set to keep track of duplicate cars
    const charSet: Set<string> = new Set();

    let answer: number = 0;
    let left = 0;


    const chars: string[] = s.split('');

    for(let right = 0; right < chars.length; right++) {
        //As long as there are no dupes, we can keep evaluating the answer.
        if(!charSet.has(chars[right])) {
            let curr = right - left + 1;
            answer = curr > answer ? curr : answer;
        } else {
            //If we encounter a duplicate, we can remove chars from
            //the left until the duplicate condition is no longer met.
            while(charSet.has(chars[right])) {
                charSet.delete(chars[left]);
                left++;
            }
        }
        charSet.add(chars[right]);
    }
    return answer;

};