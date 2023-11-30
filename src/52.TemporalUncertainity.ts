// Understanding Asynchronous Operations and Potential Null Values

// Imagine you're fetching a greeting message from a server or database.
// This function simulates that asynchronous operation.
function fetchGreeting(): string | null {
    // For the sake of this example, we're returning a hardcoded greeting.
    // In a real-world scenario, this could be a database or API call.
    return "Hello, TypeScript!";
}

// 1. Handling potential null values after an asynchronous operation

// Fetch the greeting message. It can either be a string or null.
let greetingMessage: string | null = fetchGreeting();

// Check if the greeting message is not null before using it.
if (greetingMessage !== null) {
    // Simulate an asynchronous operation using setTimeout.
    setTimeout(() => {
        // Convert the greeting message to uppercase and log it.
        console.log(greetingMessage.toUpperCase());
    }, 1000); // This will wait for 1 second before executing the function.
}

// Reset the greeting message to null.
greetingMessage = null;

// 2. Storing the value in a local constant for safer asynchronous operations

// Fetch the greeting message again.
let anotherGreeting: string | null = fetchGreeting();

// Check if the fetched greeting is not null.
if (anotherGreeting !== null) {
    // Store the greeting in a local constant.
    const localGreeting = anotherGreeting;

    // Simulate another asynchronous operation.
    setTimeout(() => {
        // Convert the local greeting to uppercase and log it.
        console.log(localGreeting.toUpperCase());
    }, 1000); // This will wait for 1 second before executing the function.
}

// Reset the greeting variable to null.
anotherGreeting = null;
