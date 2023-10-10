// TypeScript allows you to declare types for your variables, ensuring type safety.
// This means you can specify what type of value a variable can hold, such as string, number, etc.

// The `process` object is a global Node.js object that provides information about the current process.
// By default, TypeScript doesn't recognize the `process` object, so we need to install type definitions for Node.js.
// `@types/node` provides TypeScript definitions for Node.js, making it understand Node.js specific constructs.
// npm i @types/node

// Here, we're logging the name of the logged-in user from the environment variables.
console.log(
    'Logged in User:', 
    process.env.USER
)

// The `declare` keyword is used to tell TypeScript that a certain variable or object exists elsewhere.
// Here, we're telling TypeScript that there's a `process` object, but we're not defining it yet.
// This is a way to avoid TypeScript errors when using global objects like `process` that TypeScript might not recognize.
declare const process: any;

// The `fs` (File System) module is a core Node.js module that allows you to work with the file system.
// When working with modules written in TypeScript, you can directly import and use them.
import fs from 'fs';
// Here, we're creating (or overwriting if it exists) a file named "test.txt" and writing "Hello World" to it.
fs.writeFileSync("test.txt", "Hello World");

// Express is a popular web application framework for Node.js.
// However, Express is not written in TypeScript. So, when we try to use it in a TypeScript file, TypeScript won't understand it.
// To solve this, the community provides type definitions for many popular JavaScript libraries.
// `@types/express` provides TypeScript definitions for Express.
// npm i express
// npm i @types/express

// Here, we're importing the express module and setting up a basic server.
import express from "express";
const app = express();

// Setting up a route that responds with "Hello World" when accessed.
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Starting the server on port 3000.
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
