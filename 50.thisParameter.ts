// Define a function named 'multiplyByTwo'.
// The 'this' parameter is explicitly typed to ensure that the calling object has a 'numberValue' property.
function multiplyByTwo(this: { numberValue: number }) {
    // Double the 'numberValue' property of the calling object.
    this.numberValue = this.numberValue * 2;
}

// Define an object named 'correctObject' with a 'numberValue' property and the 'multiplyByTwo' function.
const correctObject = {
    numberValue: 5, // Initial value set to 5.
    multiplyByTwo
};

// Call the 'multiplyByTwo' function on 'correctObject'.
correctObject.multiplyByTwo();

// Log the updated value of 'numberValue' property of 'correctObject' to the console.
// Expected output: 10 (because 5 * 2 = 10).
console.log(correctObject.numberValue); // 10

// Define another object named 'incorrectObject' without the required 'numberValue' property.
const incorrectObject = {
    someValue: 5, // Different property name.
    multiplyByTwo
};

// Trying to call the 'multiplyByTwo' function on 'incorrectObject' will result in an error.
// This is because 'incorrectObject' does not have the required 'numberValue' property.
// Uncommenting the next line will throw an error.
// incorrectObject.multiplyByTwo(); // TypeError: Cannot read property 'numberValue' of undefined
