/*
Example 1: Given an array of positive integers nums and an integer k,
find the length of the longest subarray whose sum is less than or equal to k.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findLength = function (nums, k) {
    // curr is the current sum of the window
    let leftPointer = 0;
    let currSubarraySum = 0;
    let currLongestSubarrayLength = 0;

    //Loop through nums.
    for (let rightPointer = 0; rightPointer < nums.length; rightPointer++) {

        //Determine the current sum of the subarray.
        currSubarraySum = currSubarraySum + nums[rightPointer];

        //While the constraint k is broken.
        while (currSubarraySum > k) {
            //Remove the value at the left pointer.
            //Shrink the window by incrementing the left pointer.
            currSubarraySum = currSubarraySum - nums[leftPointer];
            leftPointer++;
        }


        let currentSubArrayLength = rightPointer - leftPointer + 1;
        if (currentSubArrayLength > currLongestSubarrayLength) {
            currLongestSubarrayLength = currentSubArrayLength;
        }
    }

    return currLongestSubarrayLength;
}

let length = findLength([3, 1, 2, 7, 4, 2, 1, 1, 5], 8);
console.log(length);