function countElements(arr: number[]): number {

    //create set of arr
    //loop thru arr
    //check if value at index i+1 is in set.
    //if true increment count
    //return count

    const numSet: Set<number> = new Set(arr);
    let count: number = 0;
    for(let i = 0; i < arr.length; i++) {
        if(numSet.has(arr[i] + 1)) {
            count++;
        }
    }
    return count;

};