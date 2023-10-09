// Intersection types allow you to combine multiple types into one.
// This enables you to add together existing types to get a single type that has all the features you need.

// Define a 2D coordinate with x and y values.
type Coordinate2D = {
    a: number;
    b: number;
};

// Extend the 2D coordinate to a 3D coordinate by adding a z value.
type Coordinate3D = Coordinate2D & {
    c: number;
};

// Define a basic user profile with just a username.
type UserProfile = {
    username: string;
};

// Define an email structure.
type UserEmail = {
    emailAddress: string;
};

// Define a phone structure.
type UserPhone = {
    phoneNumber: number;
};

// A function to display contact information.
// This function expects an object that satisfies all three types: UserProfile, UserEmail, and UserPhone.
function displayContactInfo(profile : UserProfile & UserEmail & UserPhone) {
    console.log(`Hello, I'm ${profile.username}. Email me at ${profile.emailAddress} or call me at ${profile.phoneNumber}.`);
}

displayContactInfo({
    username: 'Bob',
    emailAddress: "bob@example.com",
    phoneNumber: 9876543210
});

// For convenience, you can create a new type that combines all the three types.
type UserContactInfo = UserProfile & UserEmail & UserPhone;

// Another function using the combined type.
function displayUserContact(profile : UserContactInfo) {
    console.log(`Hello, I'm ${profile.username}. Email me at ${profile.emailAddress} or call me at ${profile.phoneNumber}.`);
}
