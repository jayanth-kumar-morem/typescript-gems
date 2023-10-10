// Declare a variable with the 'unknown' type.
// The 'unknown' type is a safe counterpart to the 'any' type.
// It indicates that the variable can hold any type, but we can't perform operations on it
// until we've ensured its type through type checking.
let dataFromLegacySystem: unknown;

// Assume loadString() is a function that fetches a string value from some legacy system.
dataFromLegacySystem = loadString();

// Before using the variable, we check its type.
// Here, we ensure that the variable holds a string before calling string-specific methods on it.
if (typeof dataFromLegacySystem === "string") {
    // Convert the string to lowercase and log it.
    console.log(dataFromLegacySystem.toLowerCase());
}

// Assume loadNumber() is a function that fetches a number value from the same legacy system.
dataFromLegacySystem = loadNumber();

// Again, we check the type of the variable before using it.
// This time, we ensure it's a number before calling number-specific methods.
if (typeof dataFromLegacySystem === "number") {
    // Convert the number to a string with two decimal places and log it.
    console.log(dataFromLegacySystem.toFixed(2));
}
