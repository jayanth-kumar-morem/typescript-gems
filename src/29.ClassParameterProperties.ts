// Class Parameter Properties in TypeScript allow you to create and initialize 
// a member in one place. This can make your code shorter and more readable.

// Define a class named 'Student'.
class Student {
    // The constructor has two parameters with 'public' modifiers.
    // This means TypeScript will automatically create and initialize 
    // properties with the same name and value as the parameters.
    constructor(public firstName: string, public grade: number) {}
}

// Create a new instance of the 'Student' class.
// This will call the constructor and pass the values 'Alice' and 10 to it.
const studentInstance = new Student('Alice', 10);

// Access and log the 'firstName' property of the 'studentInstance'.
console.log(studentInstance.firstName); // Outputs: 'Alice'

// Access and log the 'grade' property of the 'studentInstance'.
console.log(studentInstance.grade); // Outputs: 10
