function reverseString(string: string[]): void {
    helper(string, 0, string.length - 1);
}

function helper(string: string[], left: number, right: number) {
    if (left >= right) {
        return;
    }

    let temp = string[left];
    string[left++] = string[right];
    string[right--] = temp;
    helper(string, left, right);
}

let string: string[] = ['h', 'e', 'l', 'l', '0'];

console.log(string);
reverseString(string);
console.log(string);