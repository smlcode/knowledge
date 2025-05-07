// Input: nums = [3,0,1]

// Output: 2

function missingNumber(nums: number[]): number {
    //declare distinct numbers and set value
    const distinctNumbers: number = nums.length;

    //Set nums to a Set
    const numsSet: Set<number> = new Set(nums);
    //loop through range
    for(let i: number = 0; i < distinctNumbers + 1; i++) {
        //check if number to check is in nums;
        if(!numsSet.has(i)) {
            return i;
        }
    }

    return -1;
};