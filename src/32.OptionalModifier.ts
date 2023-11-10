// The `optional modifier` in TypeScript allows properties in a class or interface 
// to be optional. This means they can be left undefined or even set to null.

// Here, we define a class named `Coordinate` to represent a 2D point in space.
class Coordinate {
    // The `?` after the property name indicates that the property is optional.
    // This means it doesn't have to be provided when creating an instance of the class.
    // We also allow these properties to be `null` by using the `| null` type union.
    horizontalAxis?: number | null;
    verticalAxis?: number;
}

// Create a new instance of the `Coordinate` class.
// Notice we don't provide any initial values for `horizontalAxis` and `verticalAxis`.
const position = new Coordinate();

// At this point, both `horizontalAxis` and `verticalAxis` are undefined.
console.log(position.horizontalAxis, position.verticalAxis); // Outputs: undefined undefined

// We can assign values to these properties as needed.
position.horizontalAxis = 15;

// We can also set these properties to `undefined` or `null` since they are optional.
position.horizontalAxis = undefined;
position.horizontalAxis = null;
