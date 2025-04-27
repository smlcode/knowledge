/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    //use pointers
    let fromStart: number = 0;
    let fromEnd: number = s.length - 1;

    while (fromStart < fromEnd) {
        //swap chars. increment and decrement pointers.
        let temp = s[fromStart];
        s[fromStart++] = s[fromEnd];
        s[fromEnd--] = temp;
    }

}