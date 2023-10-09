// The `typeof` operator in TypeScript allows you to capture the type of a variable.

// Define a location with x and y coordinates.
const origin = {
    xCoord: 5,
    yCoord: 10
};

// Use the `typeof` operator to create a type based on the structure of `origin`.
type Coordinate2D = typeof origin;

// Create a new variable with the type `Coordinate2D`.
// This ensures that the variable matches the structure of `origin`.
const position: Coordinate2D = {
    xCoord: 3,
    yCoord: 4
};

// Log the `position` variable to the console.
console.log(position);

// Define a user profile with name and age properties.
const userProfile = {
    fullName: 'Alice',
    userAge: 25
};

// Use the `typeof` operator to create a type based on the structure of `userProfile`.
type UserProfileResponse = typeof userProfile;

// Define a function that processes a user profile response.
// The function expects an argument that matches the structure of `userProfile`.
function handleUserProfile(data: UserProfileResponse) {
    console.log(data);
}
