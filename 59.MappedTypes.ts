// Mapped Types

// Define a type representing a 2D coordinate on a grid.
export type Coordinate = {
    horizontal: number;
    vertical: number;
};

// Create a mapped type that makes all properties of a given type read-only.
type Immutable<T> = {
    readonly [Property in keyof T]: T[Property];
};

// Define a constant representing the origin on a 2D grid using the Immutable type.
const origin: Immutable<Coordinate> = {
    horizontal: 5,
    vertical: 5
};

// Trying to modify a property of the origin will result in a compile-time error.
// Uncommenting the line below will cause an error.
// origin.horizontal = 7; // Error: Cannot assign to 'horizontal' because it is a read-only property.

// The above error occurs because we've used the Immutable type, which makes all properties read-only.
