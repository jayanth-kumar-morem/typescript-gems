// Introduction to async/await in TypeScript:

// The 'async/await' feature in TypeScript (and JavaScript) allows you to write asynchronous code
// in a way that looks synchronous. This makes it easier to read and understand.

// Let's break it down:

// 1. The 'async' keyword: 
//    - It's used to declare an asynchronous function.
//    - An async function always returns a promise, even if you return a non-promise value from it.

// 2. The 'await' keyword:
//    - It's used inside an async function to wait for a promise to resolve.
//    - It pauses the execution of the async function until the promise is resolved, then continues with the next line.

// Define a utility function that returns a promise that resolves after a specified duration.
// This simulates a delay or a time-consuming asynchronous operation.
const pauseFor = (duration: number) => new Promise((proceed) => setTimeout(proceed, duration));

// Define the main asynchronous function.
const executeAsync = async () => {
    // Wait for 1500 milliseconds (1.5 seconds) before moving to the next line.
    await pauseFor(1500);
    
    // Print a message to the console after the delay.
    console.log("Greetings");
    
    // Wait for another 1500 milliseconds.
    await pauseFor(1500);
    
    // Print another message to the console.
    console.log("Universe");
}

// Call the main asynchronous function.
executeAsync();
