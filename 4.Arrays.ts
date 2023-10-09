// Introduction to Arrays in TypeScript

// Declaring an array with type annotation.
// This ensures that the array can only contain numbers.
let numbersArray: number[] = [10, 20, 30];

// Accessing array elements using indices.
// Arrays in TypeScript are zero-indexed, meaning the first element is accessed using index 0.
let firstNumber = numbersArray[0];  // This will retrieve the first number, which is 10.
let secondNumber = numbersArray[1]; // This will retrieve the second number, which is 20.
let thirdNumber = numbersArray[2];  // This will retrieve the third number, which is 30.

// Destructuring arrays.
// This is a concise way to extract values from arrays.

// Extracting individual elements from the array.
let [firstVal, secondVal, thirdVal] = numbersArray;
// firstVal will be 10, secondVal will be 20, and thirdVal will be 30.

// Using the rest parameter with array destructuring.
// This allows us to extract a few elements and then gather the remaining elements into another array.
let [initialValue, ...remainingValues] = numbersArray;
// initialValue will be 10, and remainingValues will be an array containing [20, 30].
