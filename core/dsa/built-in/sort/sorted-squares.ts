//Use of js Array built-in object's sort method.
function sortedSquares(nums: number[]): number[] {

    let i = 0;
    nums.forEach(num => {
        nums[i++] = num * num;
    });

    nums.sort((a, b) => a - b);

    return nums;
}

const nums: number[] = [-4,-1,0,3,10]
console.log(nums);
console.log(sortedSquares(nums));