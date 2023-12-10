// Coordinate: A simple type to represent a 2D coordinate with x and y values.
type Coordinate = { a: number; b: number };

// OptionalCoordinate: Using TypeScript's utility type 'Partial' to make all properties of Coordinate optional.
type OptionalCoordinate = Partial<Coordinate>;

class CoordinateManager<T> {
    // The constructor initializes the state with a given value.
    constructor(public currentCoordinate: T) { }

    // modifyCoordinate: A method that takes an optional update and merges it with the current state.
    modifyCoordinate(update: OptionalCoordinate) {
        this.currentCoordinate = { ...this.currentCoordinate, ...update };
    }
}

// Create a new instance of CoordinateManager with an initial coordinate.
const coordinateInstance = new CoordinateManager({ a: 5, b: 5 });

// Update the 'a' value of the coordinate.
coordinateInstance.modifyCoordinate({ a: 10 });

// Update the 'b' value of the coordinate.
coordinateInstance.modifyCoordinate({ b: 15 });

// Log the current state of the coordinate.
console.log(coordinateInstance.currentCoordinate); // { a: 10, b: 15 }