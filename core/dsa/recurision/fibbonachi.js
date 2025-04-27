/*
function F(n):
if n <= 1:
return n

oneBack = F(n - 1)
twoBack = F(n - 2)
return oneBack + twoBack
*/
function f(n) {
    if (n <= 1) {
        return n;
    }
    var oneBack = f(n - 1);
    var twoBack = f(n - 2);
    return oneBack + twoBack;
}
console.log(f(100));
