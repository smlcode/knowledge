// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

// Get input from the user
let num = 5;

// Calculate and display the factorial
let fact = factorial(num);
console.log("The factorial of " + num + " is: " + fact);