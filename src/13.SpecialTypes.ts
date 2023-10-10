// TypeScript provides special types that allow you to work with variables 
// when you're unsure about their exact types. Two of these types are `any` and `unknown`.

// `any` type:
// The `any` type is the most permissive type in TypeScript. 
// When you declare a variable of type `any`, you can assign any value to it 
// and access any of its properties or methods without any type-checking.
let exampleAny: any;

// `unknown` type:
// The `unknown` type is similar to `any`, but it's safer. 
// You can assign any value to an `unknown` variable, but you can't access its properties 
// or methods unless you perform a type check.
let exampleUnknown: unknown;

// Assigning values to `any` type:
// You can assign any value to a variable of type `any` without any restrictions.
exampleAny = 10;        // Assigning a number
exampleAny = "hello";   // Assigning a string

// Assigning values to `unknown` type:
// Just like `any`, you can assign any value to a variable of type `unknown`.
exampleUnknown = 10;        // Assigning a number
exampleUnknown = "hello";   // Assigning a string

// Using `any` type:
// With `any`, you can call any method or access any property, 
// even if it doesn't exist. This can lead to runtime errors.
exampleAny.allows.anything.you.can.imagine();

// You can also assign a value of type `any` to any other type without type-checking.
let anySetBoolean: boolean = exampleAny;

// Using `unknown` type:
// Before you can use a value of type `unknown`, you need to perform a type check.

// Checking if `exampleUnknown` is a string:
if (typeof exampleUnknown === "string") {
    // If the check passes, TypeScript knows that `exampleUnknown` is a string 
    // inside this block, so you can safely assign it to a string variable.
    let unknownSetString: string = exampleUnknown;
}

// Checking if `exampleUnknown` is a boolean:
if (typeof exampleUnknown === "boolean") {
    // If the check passes, TypeScript knows that `exampleUnknown` is a boolean 
    // inside this block, so you can safely assign it to a boolean variable.
    let unknownSetBoolean: boolean = exampleUnknown;
}

// Note: The `unknown` type helps you avoid potential runtime errors by forcing 
// you to perform type checks before using the value.
