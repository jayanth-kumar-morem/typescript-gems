// Define a type for a function that can sum numbers.
// This type has multiple call signatures, allowing for different numbers of arguments.
type Summation = {
    (a: number, b: number): number,                   // Can sum two numbers
    (a: number, b: number, c: number): number,        // Can sum three numbers
    description?: string                             // Optional property for a description
}

// Implement the Summation type.
// This function can take two or three numbers and will return their sum.
const sumNumbers: Summation = (a: number, b: number, c?: number) => {
    return a + b + (c || 0);
}
sumNumbers.description = 'Function to sum numbers';

// Define a type for creating a coordinate point.
// This type can create a 2D or 3D point.
type CoordinateMaker = {
    new(a: number, b: number): { a: number, b: number },                   // Create a 2D point
    new(a: number, b: number, c: number): { a: number, b: number, c: number }, // Create a 3D point
    (a: number, b: number): { a: number, b: number },                      // Another way to create a 2D point
    (a: number, b: number, c: number): { a: number, b: number, c: number }  // Another way to create a 3D point
    label?: string,                                                        // Optional property for a label
}

// Implement the CoordinateMaker type.
// This class can be used to create 2D or 3D coordinate points.
const coordinate: CoordinateMaker = class {
    constructor(public a: number, public b: number, public c?: number) {
    }
}
