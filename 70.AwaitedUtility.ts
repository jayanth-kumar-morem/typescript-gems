// The Awaited utility type is used to obtain the type that a Promise resolves to.
// For instance, if we have a Promise<string>, Awaited will give us the type 'string'.

// Let's start by defining a simple asynchronous function that returns a promise.

/**
 * Fetches a user's name from a mock API.
 * @returns A promise that resolves to a string representing the user's name.
 */
async function fetchUserName(): Promise<string> {
    // Simulating an asynchronous operation using setTimeout.
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("John Doe");
        }, 1000);
    });
}

// Now, let's use the Awaited utility type to get the type of value that fetchUserName resolves to.

type UserNameType = Awaited<ReturnType<typeof fetchUserName>>;

// The above type will be equivalent to 'string' since fetchUserName returns a Promise<string>.

/**
 * Logs the user's name to the console.
 * @param name - The name of the user.
 */
function displayUserName(name: UserNameType): void {
    console.log(`Hello, ${name}!`);
}

// Let's use our functions:

(async () => {
    const userName = await fetchUserName();
    displayUserName(userName);
})();
