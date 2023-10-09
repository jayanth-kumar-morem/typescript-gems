// TypeScript provides a way to define the type of object keys using the `keyof` type operator.
// This is especially useful when working with dynamic keys in objects.

// Define a string constant with type annotation.
const userName: string = 'firstName';

// Define a number constant with type annotation.
const userAge: number = 30;

// Define a symbol constant. Symbols are unique and immutable.
const userSymbol: symbol = Symbol('userSymbol');

// Create an object with dynamic keys using the constants defined above.
const userDetails = {
    [userName]: 'John',
    [userAge]: '30 years',
    [userSymbol]: 'uniqueSymbolValue',
};

// Objects can have keys of type string, number, or symbol.
// However, using objects as keys directly is not valid in TypeScript.
const address = {};

// This would throw an error as objects cannot be used as keys.
// const invalidDetails = {
//     [address]: '123 Main St',
// }

// The type `PropertyKey` is a predefined type in TypeScript that represents valid object keys (string, number, or symbol).
type ValidObjectKey = keyof any;

// Declare a variable of type `PropertyKey`.
let userProperty: PropertyKey;

// Assigning valid keys to the variable.
userProperty = userName;   // string key
userProperty = userAge;    // number key
userProperty = userSymbol; // symbol key
