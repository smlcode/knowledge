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

    let left = 0;
    let longestSubarrayLength = 0;
    let currentSubarraySum = 0;

    for (let right = 0; right < nums.length; right++) {
        currentSubarraySum = currentSubarraySum + nums[right];

        while (currentSubarraySum > k) {
            currentSubarraySum = currentSubarraySum - nums[left];
            left++;
        }

        let currentSubarrayLength = right - left + 1;
        if (currentSubarrayLength > longestSubarrayLength) {
            longestSubarrayLength = currentSubarrayLength;
        }
    }
    return longestSubarrayLength;
}

let length = findLength([3, 1, 2, 7, 4, 2, 1, 1, 5], 8);
console.log(length);