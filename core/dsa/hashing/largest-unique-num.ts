// Input: nums = [5,7,3,9,4,9,8,3,1]
// Output: 8

function largestUniqueNumber(nums: number[]): number {

    const numCountMap: Map<number, number> = new Map();

    nums.forEach(num => {
        if(numCountMap.has(num)) {
            numCountMap.set(num, numCountMap.get(num) + 1);
        } else {
            numCountMap.set(num, 1);
        }
    });

    let largestUniqueNumber: number = -1;
    numCountMap.forEach((count, number) => {
        if(count === 1 && number > largestUniqueNumber) {
            largestUniqueNumber = number;
        }
    });

    return largestUniqueNumber;
}

// Input: nums = [5,7,3,9,4,9,8,3,1]
// Output: 8

function largestUniqueNumber2(nums: number[]): number {

    const numCountMap: Map<number, number> = new Map();

    nums.forEach(num => {
        if(numCountMap.has(num)) {
            numCountMap.set(num, numCountMap.get(num) + 1);
        } else {
            numCountMap.set(num, 1);
        }
    });

    let uniqueNums: number[] = [];
    numCountMap.forEach((count, number) => {
        if(count === 1) {
            uniqueNums.push(number);
        }
    });

    if(uniqueNums.length < 1) {
        return -1;
    }

    return Math.max(...uniqueNums);
};