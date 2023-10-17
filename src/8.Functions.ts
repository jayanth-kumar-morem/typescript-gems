/**
 * This is a simple TypeScript function that adds two numbers.
 * 
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of `a` and `b`.
 */
function add(a: number, b: number): number {
    return a + b;
}

/**
 * A function to log messages to the console.
 * 
 * @param message - The message to be logged.
 */
function log(message: string): void {
    console.log(message);
}

/**
 * A function that calculates the sum of all provided numbers.
 * The '...numbers' syntax is called rest parameters, allowing you to pass multiple arguments.
 * 
 * @param numbers - An array of numbers to be summed.
 * @returns The total sum of all numbers.
 */
function sum(...numbers: number[]): number {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

// Example usage of the sum function:
log(sum(1, 2, 3, 4, 5).toString()); // Outputs: 15
log(sum(10, 20).toString());       // Outputs: 30

/**
 * TypeScript supports first-class functions, meaning functions can be assigned to variables,
 * passed as arguments, and returned from other functions.
 * 
 * Here, we define a type for a subtraction function and then declare a function that matches this type.
 */

// Define a type for a function that subtracts two numbers.
type SubtractionFunction = (a: number, b: number) => number;

// Declare a function that matches the SubtractionFunction type.
let subtract: SubtractionFunction = function (a: number, b: number): number {
    return a - b;
}

// Example usage:
log(subtract(10, 5).toString()); // Outputs: 5
