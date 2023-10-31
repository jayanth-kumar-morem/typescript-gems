// ts-node

// Declare a variable named 'greeting' with a type annotation of 'string'.
// Type annotations in TypeScript help ensure that variables hold specific types of values.
let greeting: string = "Hi, TypeScript learners!";

// Use the 'displayMessage' function to log the greeting to the console.
displayMessage(greeting);

/**
 * A simple function to display a message on the console.
 * 
 * @param text - The message to be displayed.
 */
function displayMessage(text: string): void {
    console.log(text);
}

// Running this TypeScript file directly using Node.js will result in an error.
// node src/learningTypeScript.ts --> Gives error

// To execute this file using Node.js, you first need to compile it to JavaScript.
// npx tsc src/learningTypeScript.ts
// node src/learningTypeScript.js

// Alternatively, you can use 'ts-node' to directly run TypeScript files without compiling.
// npx ts-node src/learningTypeScript.ts --> Runs if you have the ts-node package installed.
// npm install -g ts-node --> Install ts-node globally to use it from anywhere.

// For convenience, you can modify your 'package.json' to include a script to run this file using ts-node.
// "scripts": {
//     "begin": "ts-node src/learningTypeScript.ts"
// },
// Use 'npm run begin' to execute the script.
