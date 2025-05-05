//Input: nums = [1(L),1,0,1(R),0,0,1,1,0], k = 1

//zeroesFlipped: 1

function longestOnes(nums: number[], maxZeroes: number): number {
    let left = 0;
    let right = 0;
    let zerosFlipped = 0;
    let longest = 0;

    for(right; right < nums.length; right++) {

        if(nums[right] === 0) {
            zerosFlipped++;
        }

        while(zerosFlipped > maxZeroes) {
            if(nums[left] === 0) {
                zerosFlipped--;
            }
            left++;
        }
        let current = right - left + 1;
        longest = current > longest ? current : longest;
    }

    return longest;
}

//Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3

function longestOnes2(nums: number[], maxZeroes: number): number {
    let left = 0;
    let right = 0;
    let zerosFlipped = 0;

    for(right; right < nums.length; right++) {

        if(nums[right] === 0) {
            zerosFlipped++;
        }

        if(zerosFlipped > maxZeroes) {
            if(nums[left] === 0) {
                zerosFlipped--;
            }
            left++;
        }

    }

    return right - left;
}


