// Define a type for the login form data.
// This type represents the structure of the data we expect when a user submits a login form.
type LoginForm = {
    userEmail: string;       // User's email address
    userPassword: string;   // User's password
    personalInfo: {         // Nested object for user's personal information
        givenName: string;  // User's first name
        familyName: string; // User's last name
    };
}

// Extract the type for the 'personalInfo' property from the LoginForm type.
// This is a powerful feature in TypeScript where we can extract types from existing types.
type PersonalInfo = LoginForm['personalInfo'];

// A function to retrieve a user's personal information.
// This is just a mock function for demonstration purposes.
function fetchPersonalInfo(): PersonalInfo {
    // Return a hardcoded user's personal information.
    // In a real-world scenario, this data might come from a database or an API.
    return {
        givenName: 'Alice',
        familyName: 'Smith'
    }
}
