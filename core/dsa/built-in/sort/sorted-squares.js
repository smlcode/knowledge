function sortedSquares(nums) {
    var i = 0;
    nums.forEach(function (num) {
        nums[i++] = num * num;
    });
    nums.sort(function (a, b) { return a - b; });
    return nums;
}
var nums = [-4, -1, 0, 3, 10];
console.log(nums);
console.log(sortedSquares(nums));
