function runningSum(nums: number[]): number[] {
    const runningSum: number[] = [];

    let i = 0;
    nums.forEach(num => {
        runningSum.push(num + (runningSum[i-1] ?? 0));
        i++;
    });

    return runningSum;
};