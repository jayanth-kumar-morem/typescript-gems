// The `Ensure` type ensures that all properties of a type are required.
// It uses TypeScript's mapped types to iterate over each property of the type `T` and makes them non-optional.
export type Ensure<T> = {
    [Key in keyof T]-?: T[Key];
};

// A simple type representing coordinates which can be optional.
type OptionalCoordinates = { latitude?: number; longitude?: number };

// Using our `Ensure` type to make sure all properties of `OptionalCoordinates` are required.
type Coordinates = Ensure<OptionalCoordinates>;

// A configuration type for a geometric shape with optional properties.
type ShapeConfig = {
    size?: number;
    shade?: string;
};

// The `GeometricShape` class represents a shape with certain configurations.
class GeometricShape {
    // Using the `Ensure` type to make sure all properties of `ShapeConfig` are required.
    private shapeDetails: Ensure<ShapeConfig>;

    // The constructor initializes the shape with default values if not provided.
    constructor(details: ShapeConfig) {
        this.shapeDetails = {
            shade: details.shade ?? 'blue', // Default shade is 'blue'.
            size: details.size ?? 5,        // Default size is 5.
        };
    }

    // The `display` method logs the details of the shape.
    display() {
        console.log(`Shade: ${this.shapeDetails.shade}`);
        console.log(`Size: ${this.shapeDetails.size}`);
    }
}
