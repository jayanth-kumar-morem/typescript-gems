// Define a type named 'User' with a single property 'id' of type string.
type User = { id: string };

// Define another type named 'Product' with a single property 'id' of type string.
type Product = { id: string };

// Declare a variable named 'user' of type 'User' and assign it an object with an 'id' property.
let user: User = { id: 'user-1' };

// Declare another variable named 'product' of type 'Product' and assign it an object with an 'id' property.
let product: Product = { id: 'product-1' };

// TypeScript allows assignment between types with identical structures.
// Here, both 'User' and 'Product' have the same structure, so this assignment is valid.
user = product;

// Similarly, this assignment is also valid for the same reason.
product = user;

// Define a type named 'Point2D' representing a point in 2D space with 'x' and 'y' coordinates.
type Point2D = { x: number; y: number };

// Define another type named 'Point3D' representing a point in 3D space with 'x', 'y', and 'z' coordinates.
type Point3D = { x: number; y: number; z: number };

// Declare a variable named 'point2D' of type 'Point2D' and assign it a 2D point.
let point2D: Point2D = { x: 0, y: 10 };

// Declare another variable named 'point3D' of type 'Point3D' and assign it a 3D point.
let point3D: Point3D = { x: 0, y: 10, z: 20 };

// Assigning a variable of type 'Point3D' to a variable of type 'Point2D' is valid.
// This is because 'Point3D' has all the properties of 'Point2D' (and more).
// This is known as "structural typing".
point2D = point3D;

// A function that expects a 'Point2D' argument.
// Since 'Point3D' has all properties of 'Point2D', we can pass a 'Point3D' object to this function.
function takesPoint2D(point: Point2D) {
    // Function implementation...
}
takesPoint2D(point3D);

// However, the reverse is not true.
// Assigning a variable of type 'Point2D' to a variable of type 'Point3D' is NOT valid.
// This is because 'Point2D' lacks the 'z' property required by 'Point3D'.
// Uncommenting the next line will result in a TypeScript error.
// point3D = point2D;

// A function that expects a 'Point3D' argument.
// Passing a 'Point2D' object to this function is NOT valid, as it lacks the 'z' property.
function takesPoint3D(point: Point3D) {
    // Function implementation...
}
// Uncommenting the next line will result in a TypeScript error.
// takesPoint3D(point2D);
