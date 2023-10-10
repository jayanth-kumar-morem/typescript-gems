// Modules in TypeScript allow you to organize and encapsulate your code.
// By using 'export', you make the function available to other files (or modules) that wish to use it.

/**
 * Checks if a given string is a palindrome.
 * A palindrome is a word, phrase, number, or other sequences of characters
 * which reads the same backward or forward.
 * 
 * @param x - The string to check.
 * @returns - Returns true if the string is a palindrome, otherwise false.
 */
export function isPalindrome(x: string): boolean {
    // Split the string into an array of characters, reverse the array, and then join it back into a string.
    let reversedString = x.split('').reverse().join('');

    // Check if the original string is equal to the reversed string.
    return x === reversedString;
}

// Test the isPalindrome function.
console.log(isPalindrome('hello'));  // Expected output: false
console.log(isPalindrome('madam'));  // Expected output: true


// AnotherFile.ts
// To use functions or variables from another module, you can use the 'import' keyword.

// Importing a specific function from the 18.Modules file.
import { isPalindrome } from './18.Modules';

// Importing everything from the 18.Modules file and giving it an alias name 'modules'.
// This is useful when you want to access multiple exports from a module without importing them one by one.
import * as modules from './18.Modules';

// Test the imported isPalindrome function.
console.log(isPalindrome('hello'));  // Expected output: false

// Test the isPalindrome function using the 'modules' alias.
console.log(modules.isPalindrome('hello'));  // Expected output: false
