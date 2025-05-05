function findMaxAverage(nums: number[], k: number): number {
    let currSubarraySum: number = 0;
    let left: number = 0;

    //Get the first subarray
    for(let i = 0; i < k; i++) {
        currSubarraySum += nums[i];
    }

    let maxAverage: number = currSubarraySum/k;

    //Continue after k, slide and remove left, add right
    for(let right = k; right < nums.length; right++) {
        //add right
        currSubarraySum += nums[right];
        //subtract left
        currSubarraySum -= nums[left];
        left++;
        //check if the answer is larger
        let currentAverage = currSubarraySum/k;
        maxAverage = currentAverage > maxAverage ? currentAverage : maxAverage;
    }

    return maxAverage;
}
