// Function Overloading in TypeScript

// Overload signature for a single word input
function flip(word: string): string;

// Overload signature for an array of characters input
function flip(characters: string[]): string[];

// Implementation of the flip function
function flip(data: string | string[]): string | string[] {
    // Check if the input data is of type string
    if (typeof data === 'string') {
        // Split the string into an array of characters, reverse the array, and then join it back into a string
        return data.split('').reverse().join('');
    } else {
        // If the input is an array, simply reverse the array
        // Using slice() to create a copy of the array before reversing, to avoid mutating the original array
        return data.slice().reverse();
    }
}

// Test the flip function with a string input
console.log(flip('world'));  // Expected output: 'dlrow'

// Test the flip function with an array of characters input
console.log(flip(['w', 'o', 'r', 'l', 'd']));  // Expected output: ['d', 'l', 'r', 'o', 'w']
