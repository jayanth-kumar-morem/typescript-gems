// TypeScript allows you to specify the type of variables, parameters, and return values.
// However, sometimes you might need to change the type of a variable, especially when dealing with user input or third-party libraries.
// This process is known as "type casting."

// Declare a variable without an initial type.
let userInput;

// Assign a string value to the variable.
userInput = '1337';

// Type casting using the "as" keyword:
// Here, we're telling TypeScript to treat the 'userInput' variable as a number.
// Note: This doesn't actually convert the string to a number. It just changes how TypeScript thinks about that variable.
const castedNumber1 = userInput as unknown as number;

// This will result in NaN (Not a Number) because 'userInput' is still a string at runtime.
console.log(castedNumber1 + 1); // NaN

// A better way to convert a string to a number in JavaScript is using the unary plus (+) operator.
const castedNumber2 = +userInput;

// Now, 'castedNumber2' is genuinely a number, so we can perform arithmetic operations on it.
console.log(castedNumber2 + 1); // 1338

// Demonstrating the correct conversion again for emphasis.
console.log(castedNumber2 + 1); // 1338
