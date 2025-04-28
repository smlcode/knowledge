//Sorted squares using pointers O(n)
function sortedSquares(nums: number[]): number[] {
    const sortedSquares: number[] = [];
    const numsLength = nums.length;
    let left: number = 0;
    let right: number = numsLength - 1;

    for (let i: number = numsLength - 1; i >= 0; i--) {
        let num: number;
        if(Math.abs(nums[left]) < Math.abs(nums[right])) {
            num = nums[right];
            right--;
        } else {
            num = nums[left];
            left++;
        }
        sortedSquares[i] = num * num;
    }
    return sortedSquares;
};