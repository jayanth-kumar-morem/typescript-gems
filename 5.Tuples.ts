// Tuple
let tuple: [number, string, boolean] = [7, "hello", true];

// Usage
// Accessing individual elements of a tuple.
let a = tuple[0]; // a will be 7.
let b = tuple[1]; // b will be "hello".

// Destructuring tuples.
let [x, y, z] = tuple;
// x will be 7, y will be "hello", and z will be true.

// Using the rest parameter with tuple destructuring.
let [firstVal, ...remainingVals] = tuple;
// firstVal will be 7, and remainingVals will be an array containing ["hello", true].

// Updating tuple values.
tuple[0] = 10; // OK
tuple[1] = "world"; // OK
tuple[2] = false; // OK

// Updating tuple with not OK values
// tuple[0] = "hello"; // Error
// tuple[1] = false; // Error
// tuple[2] = 100; // Error