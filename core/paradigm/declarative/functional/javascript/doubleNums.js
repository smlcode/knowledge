const numbers = [1, 2, 3, 4, 5, 6];

// Filter even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

// Double the even numbers
const doubleEvenNumbers = evenNumbers.map(num => num * 2);

console.log(doubleEvenNumbers); // [4, 8, 12]