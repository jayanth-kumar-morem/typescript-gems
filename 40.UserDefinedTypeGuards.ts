// User-defined type guards

// Define a type for a Circle with a radius property
type Circle = {
    radius: number;
};

// Define a type for a Triangle with base and height properties
type Triangle = {
    base: number;
    verticalHeight: number;
};

// Create a union type that can be either a Circle or a Triangle
type GeometricShape = Circle | Triangle;

// Type guard to check if a given shape is a Circle
function isCircle(shape: GeometricShape): shape is Circle {
    return "radius" in shape; // Check if the shape has a "radius" property
}

// Type guard to check if a given shape is a Triangle
function isTriangle(shape: GeometricShape): shape is Triangle {
    return "base" in shape && "verticalHeight" in shape; // Check if the shape has both "base" and "verticalHeight" properties
}

// Function to calculate the area of a given shape
function computeArea(shape: GeometricShape) {
    if (isCircle(shape)) {
        // If the shape is a Circle, calculate the area using the formula: π * radius^2
        return 3.14 * shape.radius * shape.radius;
    }
    else if (isTriangle(shape)) {
        // If the shape is a Triangle, calculate the area using the formula: 0.5 * base * height
        return 0.5 * shape.base * shape.verticalHeight;
    }
    else {
        // This block ensures that all shape cases are handled. If a new shape is added to the GeometricShape type in the future,
        // TypeScript will throw an error here, prompting the developer to handle the new shape.
        const _exhaustiveCheck: never = shape;
        return _exhaustiveCheck;
    }
}
