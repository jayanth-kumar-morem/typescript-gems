// Type Aliasing and Type Assertion

// Define a 2D coordinate type with x and y coordinates.
type Coordinate2D = { a: number; b: number };

// Extend the 2D coordinate type to create a 3D coordinate type with an additional z coordinate.
type Coordinate3D = Coordinate2D & { c: number };

// Define a simple type for a user with a name and age property.
type User = { firstName: string; yearsOld: number };

// Create a 2D coordinate object.
let coord2D = { a: 5, b: 15 };

// Create a 3D coordinate object by spreading the properties of the 2D coordinate and adding a z coordinate.
let coord3D = { ...coord2D, c: 25 };

// Create a user object.
let user = { firstName: 'Alice', yearsOld: 25 };

// Assigning a 3D coordinate to a 2D coordinate is valid since 3D contains all properties of 2D.
coord2D = coord3D;

// The following assignments will result in type errors because the structures don't match.
// coord2D = user; // Error: 'name' and 'age' don't exist on type Coordinate2D.
// coord3D = coord2D; // Error: Property 'c' is missing in type Coordinate2D.

// Directly asserting `user` to `Coordinate3D` will result in an error because the structures don't match.
// coord3D = user as Coordinate3D; // Error

// However, using a double assertion (first to 'unknown' and then to 'Coordinate3D') bypasses the type system.
// This is a powerful feature but should be used with caution as it can lead to runtime errors.
coord3D = user as unknown as Coordinate3D; // OK, but be careful!
