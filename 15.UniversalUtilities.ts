// This is an example of function overloading in TypeScript.
// Function overloading allows you to have multiple function types for the same function name.

// First function signature: Accepts a parameter of type 'any'.
// The 'any' type in TypeScript means that the variable can be of any type.
// However, using 'any' is not type-safe and should be avoided when possible.
function display(value: any) {
    // The 'toFixed' method is used to format a number to use a fixed number of decimal places.
    // Since 'value' is of type 'any', TypeScript won't catch errors if 'value' isn't a number.
    console.log(value.toFixed(2));
}

// Second function signature: Accepts a parameter of type 'unknown'.
// The 'unknown' type is a safer alternative to 'any'. It represents any value, but we can't perform operations on it
// without first asserting or narrowing its type.
function display(value: unknown) {
    // Check if the value is a string.
    if (typeof value === "string") {
        // Convert the string to lowercase and log it.
        console.log(value.toLowerCase());
    } else if (typeof value === "number") {
        // If the value is a number, format it with two decimal places and log it.
        console.log(value.toFixed(2));
    } else {
        // If the value is neither a string nor a number, log a default message.
        console.log("Unsupported value type");
    }
}

// Note: In TypeScript, the last overload is the one that gets used at runtime.
// The earlier signatures are only used for type checking.
