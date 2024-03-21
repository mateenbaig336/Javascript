const numbers = [1, 3, 5, 7, 9, 11, 13];
// printing array elements
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
//printing array elements using dynamic expression
let prime = "An array of prime numbers";
for (let j = 0; j < numbers.length; j++) {
    console.log(`${prime}` + " " + numbers[j]);
}

// // Printing in reverse order
for (let k = numbers.length-1; k >= 0; k--) {
    console.log(numbers[k]);
}

// // Printing the sum of Array 
let sum = 0;
for (let n = 0; n < numbers.length; n++) {
    sum += numbers[n];
    console.log(sum);
    
} 

