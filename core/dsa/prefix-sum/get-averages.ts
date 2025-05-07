function getAverages(nums: number[], radius: number): number[] {

// Input: nums = [7,4,3,9,1,8,5,2,6], k = 3
// Output: [-1,-1,-1,5,4,4,-1,-1,-1];

    //Create an output array.
    const averages: number[] = [];
    const prefixSums: number[] = [nums[0]];
    const subArrayLength: number = 2 * radius + 1;


    for(let i = 1; i < nums.length; i++) {
        let prefixSum = nums[i] + prefixSums[i-1];
        prefixSums.push(prefixSum);
    }

    //Loop through nums
    for(let i = 0; i < nums.length; i++) {
        //Check If there are less than k elements before or after the index i, then the k-radius average is -1
        const remaining: number = nums.length - (i + 1);
        if(i < radius || remaining < radius) {
            averages.push(-1);
        } else {
            //Else calculate the average and truncate toward zero (lose the fractional part). We could use prefix sum here.
            const leftBoundry: number = i - radius;
            const rightBoundry:number = i + radius;
            const shouldSubtrackLeft: boolean = leftBoundry - 1 > -1;
            const prefixSumToSubtract: number = shouldSubtrackLeft ? prefixSums[leftBoundry - 1] : 0;
            const subArraySum: number = prefixSums[rightBoundry] - prefixSumToSubtract;
            const average = Math.floor(subArraySum / subArrayLength);

            averages.push(average);
        }
    }

    return averages;
}



function getAverages2(nums: number[], k: number): number[] {
    // When a single element is considered then its average will be the number itself only.
    if (k === 0) {
        return nums;
    }

    const windowSize = 2 * k + 1;
    const n = nums.length;
    const averages = new Array(n).fill(-1);

    // Any index will not have 'k' elements in it's left and right.
    if (windowSize > n) {
        return averages;
    }

    // Generate 'prefix' array for 'nums'.
    // 'prefix[i + 1]' will be sum of all elements of 'nums' from index '0' to 'i'.
    const prefix: number[] = new Array(n + 1).fill(0);
    for (let i = 0; i < n; ++i) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    // We iterate only on those indices which have atleast 'k' elements in their left and right.
    // i.e. indices from 'k' to 'n - k'
    for (let i = k; i < n - k; ++i) {
        const leftBound = i - k, rightBound = i + k;
        const subArraySum = prefix[rightBound + 1] - prefix[leftBound];
        const average = Math.floor(subArraySum / windowSize);
        averages[i] = average;
    }

    return averages;
};