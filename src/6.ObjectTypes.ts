// Define a variable 'origin' with an inline type definition.
// This variable represents a point on a 2D plane with x and y coordinates.
let origin: { x: number, y: number } = {
    x: 0,  // x-coordinate of the origin point
    y: 0   // y-coordinate of the origin point
};

// Define another variable 'firstPoint' with the same inline type definition.
// This variable represents another point on the 2D plane.
let firstPoint: { x: number, y: number } = {
    x: 1,  // x-coordinate of the first point
    y: 1   // y-coordinate of the first point
};

// Instead of repeating the inline type definition, we can define a type alias.
// Here, we define a type 'Coordinate' that represents a point on a 2D plane.
type Coordinate = { x: number, y: number };

// Using the 'Coordinate' type alias, we can define variables without repeating the type structure.
let origin2: Coordinate = {
    x: 0,  // x-coordinate of the second origin point
    y: 0   // y-coordinate of the second origin point
};

// Define another variable 'secondPoint' using the 'Coordinate' type alias.
let secondPoint: Coordinate = {
    x: 1,  // x-coordinate of the second point
    y: 1   // y-coordinate of the second point
};
