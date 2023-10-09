// Define a type named 'Coordinate' that represents a point in 2D space.
// This type has two properties: 'a' representing the x-axis and 'b' representing the y-axis.
type Coordinate = { a: number, b: number };

// Declare a constant named 'origin' of type 'Coordinate'.
// This represents the origin point (0,0) in a 2D space.
const origin: Coordinate = { a: 0, b: 0 };

// Attempting to reassign a new value to the 'origin' constant will result in an error.
// This is because constants cannot be reassigned after their initial declaration.
// origin = { a: 2, b: 2 }; // Uncommenting this line will cause an error.

// However, the properties of the 'origin' object can be modified.
// This is because the object itself is mutable, even if the reference to the object (i.e., the constant 'origin') is not.
origin.a = 2; // This changes the x-coordinate of the 'origin' point to 2.
origin.b = 2; // This changes the y-coordinate of the 'origin' point to 2.

// Note: If you want to make the properties of the 'Coordinate' type immutable, consider using the 'readonly' modifier.
