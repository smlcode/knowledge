// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

function numJewelsInStones(jewels: string, stones: string): number {

    const jewelsSet: Set<string> = new Set(jewels.split(''));
    let count = 0;

    for(const stone of stones) {
        if(jewelsSet.has(stone)) {
            count ++;
        }
    }

    return count
};