/*
function F(n):
if n <= 1:
return n

oneBack = F(n - 1)
twoBack = F(n - 2)
return oneBack + twoBack
*/


function f(n): number {
    if(n <= 1) {
        return n;
    }
    let oneBack = f(n-1);
    let twoBack = f(n-2);
    return oneBack + twoBack;
}

console.log(f(100));