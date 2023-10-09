// Type Definitions
// Define a type for a Student with a possible graduation date.
type Student = {
    studentName: string;
    graduationDate?: Date;
}

// Assertion Function Definitions
// This function checks a given condition and throws an error with a custom message if the condition is false.
function verify(condition: unknown, errorMsg: string) asserts condition {
    if (!condition) {
        throw new Error(errorMsg);   
    }
}

// This function checks if a given value is a Date object and throws an error if it's not.
function verifyDate(dateValue: unknown): asserts dateValue is Date {
    if (!(dateValue instanceof Date)) {
        throw new Error('Provided value is not a valid Date object');
    }
}

// Sample Data
const potentialStudent = null;

// Assertions
// Check if potentialStudent is not null before accessing its properties.
verify(potentialStudent !== null, 'potentialStudent should not be undefined or null');
console.log('Student Name:', potentialStudent.studentName);

// Check if the graduationDate property of potentialStudent is a valid Date object.
verifyDate(potentialStudent.graduationDate);
console.log('Graduation Date:', potentialStudent.graduationDate.toISOString());

// Application Code
// Here, you can implement user-defined type guards and other application-specific logic.

// Application Tests
// Implement tests using the above assertion functions to validate user-defined type guards and other functionalities.
