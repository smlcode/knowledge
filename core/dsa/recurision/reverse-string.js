function reverseString(string) {
    helper(string, 0, string.length - 1);
}
function helper(string, left, right) {
    if (left >= right) {
        return;
    }
    var temp = string[left];
    string[left++] = string[right];
    string[right--] = temp;
    helper(string, left, right);
}
var string = ['h', 'e', 'l', 'l', '0'];
console.log(string);
reverseString(string);
console.log(string);
