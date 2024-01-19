/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

for (let i = 0; i < 21; i++) {
  console.log(i); 
}

for (let i = 3; i <= 29; i = i + 2) {
  console.log(i); 
}

for (let i = 12; i >= -14; i = i - 2) {
  console.log(i); 
}

for (let i = 50; i >= 20; i--) {
  if (i % 3 == 0) {
    console.log(i); 
  }
}


/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

let word = "LaunchCode"; 
let array = [1, 5, 'LC101', 'blue', 42]; 

for (let i = 0; i < array.length; i++) {
  console.log(array[i]); 
}

for (let i = word.length - 1; i >= 0; i--) {
  console.log(word[i]); 
}


/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

let originalArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evens = []; 
let odds = []; 

for (let i = 0; i < originalArray.length; i++) {
  if (originalArray[i] % 2 == 0) {
    evens.push(originalArray[i]); 
  } else {
    odds.push(originalArray[i]); 
  }
}

console.log(evens); 
console.log(odds); 