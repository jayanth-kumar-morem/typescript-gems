// The `never` type in TypeScript represents a value that never occurs.
// It's a way to ensure that all cases in a switch or if-else chain are handled.

// Define a type for a Circle shape.
type Circle = {
    kind: 'circle';
    radius: number;
}

// Define a type for a Triangle shape.
type Triangle = {
    kind: 'triangle';
    base: number;
    height: number;
}

// Define a union type that can be either a Circle or a Triangle.
type GeometricShape = Circle | Triangle;

// Function to calculate the area of a given geometric shape.
function calculateArea(shape: GeometricShape): number {
    // Use a switch statement to determine the type of the shape.
    switch (shape.kind) {
        // If it's a circle, use the formula for the area of a circle.
        case 'circle':
            return 3.14 * shape.radius * shape.radius;
        // If it's a triangle, use the formula for the area of a triangle.
        case 'triangle':
            return 0.5 * shape.base * shape.height;
    }
    // If none of the cases match, TypeScript will throw an error because
    // the shape wasn't expected. This is where the `never` type comes in handy.
    // It ensures that all cases are handled in the switch statement.
    const ensureAllCasesHandled: never = shape;
    return ensureAllCasesHandled;
}
