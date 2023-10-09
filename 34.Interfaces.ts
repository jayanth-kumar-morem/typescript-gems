// Understanding TypeScript Types and Interfaces

// TYPES

// Define a 2D coordinate type using the 'type' keyword.
// This represents a point in a 2D space with x and y coordinates.
type Coordinate2D = {
    horizontal: number;
    vertical: number;
}

// Extend the 2D coordinate type to create a 3D coordinate type.
// This represents a point in a 3D space with x, y, and z coordinates.
type Coordinate3D = Coordinate2D & {
    depth: number;
}

// Create an instance of the 3D coordinate type.
// This represents a specific point in a 3D space.
export const my3DCoordinate: Coordinate3D = {
    horizontal: 4,
    vertical: 5,
    depth: 6
}

// INTERFACES

// Define a 2D coordinate interface using the 'interface' keyword.
// Interfaces are similar to types but are more extensible and can be implemented by classes.
interface ICoordinate2D {
    horizontal: number;
    vertical: number;
}

// Extend the 2D coordinate interface to create a 3D coordinate interface.
// This allows us to build upon existing interfaces and add more properties.
interface ICoordinate3D extends ICoordinate2D {
    depth: number;
}

// Create an instance of the 3D coordinate interface.
// This represents another specific point in a 3D space.
export const my3DCoordinateInterface: ICoordinate3D = {
    horizontal: 7,
    vertical: 8,
    depth: 9
}
