// Exploring the differences and similarities between 'null' and 'undefined' in TypeScript.

// Declare a variable to represent an uninitialized value.
let uninitializedValue: undefined = undefined;

// Declare a variable to represent an absence of value.
let absenceOfValue: null = null;

// Define a class named 'Coordinate' to represent a point in 2D space.
class Coordinate {
    horizontal: number;
    vertical: number;
}

// Create an instance of the 'Coordinate' class named 'origin'.
const origin = new Coordinate();
origin.horizontal = 5;  // Assign a value to the 'horizontal' property.

// Note: We haven't assigned a value to the 'vertical' property, so it will be 'undefined' by default.

// Log the properties of the 'origin' instance.
console.log(origin.horizontal, origin.vertical); // 5, undefined

// Define a function named 'displayVowels' to log vowels from a given string.
function displayVowels(inputText: string) {
    console.log(inputText.match(/[aeiou]/gi));
}

// Test the 'displayVowels' function with different strings.
displayVowels("TypeScript Rocks"); // [ 'e', 'i', 'o' ]
displayVowels("ts"); // null

// Comparing 'null' and 'undefined' using equality (==) and strict equality (===) operators.

// Both 'null' and 'null' are equal.
console.log(null == null); // true

// Both 'undefined' and 'undefined' are equal.
console.log(undefined == undefined); // true

// 'null' and 'undefined' are loosely equal, but not strictly equal.
console.log(null == undefined); // true

// These comparisons demonstrate that 'null' and 'undefined' are distinct from other falsy values.
console.log(false === null); // false
console.log(0 == null); // false
console.log('' == null); // false
