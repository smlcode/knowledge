function findMaxLength(nums: number[]): number {

    //Keep track of 0s and 1s in map
    const binaryCountMap: Map<number,number> = new Map();
    // const binaryCountMap: Map<number,number> = new Map([[0,0],[1,0]]);
    binaryCountMap.set(0, 0);
    binaryCountMap.set(1, 0);

    //If one of the values exceeds half the length, equality is not possible.
    //ie length 9 / 2 = 4.5 | 0s: 5, 1s: 4
    let maxEqualLength: number = nums.length / 2;

    //left pointer
    let left: number = 0;

    //Keep track of the answer.
    let maxLengthAns: number = 0;

    //loop thru nums
    for(let right = 0; right < nums.length; right++) {

        //Keep track of the binary count. 0s or 1s count.
        binaryCountMap.set(nums[right], binaryCountMap.get(nums[right]) + 1);

        while (binaryCountMap.get(0) > maxEqualLength || binaryCountMap.get(1) > maxEqualLength) {
            binaryCountMap.set(nums[left], binaryCountMap.get(nums[left]) - 1);
            left++;
            //ie length (9 - 1) / 2 = 4. Map: 0s: 0, 1s: 5
            maxEqualLength = (nums.length - left) / 2;
        }

        const currLength: number = right - left + 1;
        //Check if greater length and if equal and store max
        if (currLength > maxLengthAns && binaryCountMap.get(0) === binaryCountMap.get(1)) {
            maxLengthAns = currLength;
        }
    }

    return maxLengthAns;
}

console.log(findMaxLength([0,1,1,1,1,1,0,0,0]));
//expected 6