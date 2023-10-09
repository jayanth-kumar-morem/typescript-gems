// Using Index Signatures in TypeScript

// Define a type for a User with a name and an address.
type User = {
    fullName: string;
    contact: string;
};

// Define a type for a User Directory using index signatures.
// This allows us to create an object where the keys are strings (representing usernames)
// and the values are of type User or undefined.
type UserDirectory = {
    [usernameKey: string]: User | undefined;
};

// Create an instance of the UserDirectory with a sample user.
const users: UserDirectory = {
    'alice123': {
        fullName: 'Alice Wonderland',
        contact: 'alice@wonderland.com'
    },
};

// Accessing a user's full name using their username.
users['alice123']?.fullName; // Alice Wonderland

// Adding a new user to the directory.
users['bob456'] = {fullName: 'Bob Builder', contact: 'bob@builder.net'}

// Displaying the newly added user's details.
console.log(users['bob456']); // { fullName: 'Bob Builder', contact: 'bob@builder.net'}

// Removing a user from the directory using the delete keyword.
delete users['bob456'];

// Trying to access a user that doesn't exist in the directory.
// The result will be of type User | undefined.
const fetchedUser = users['nonexistentUser'];
console.log(fetchedUser); // undefined
