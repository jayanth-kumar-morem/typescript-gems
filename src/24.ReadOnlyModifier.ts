// The `readonly` modifier ensures that once a property is set, it cannot be changed.
// This is useful for creating immutable objects or properties.

// Using the `readonly` modifier with object types
type Coordinates = {
    readonly latitude: number;
    readonly longitude: number;
};

// Creating an object of type `Coordinates`
const location: Coordinates = { latitude: 10, longitude: 20 };

// Trying to reassign the entire object will result in an error
// location = { latitude: 30, longitude: 40 }; // This will throw an error!

// Trying to modify individual properties will also result in an error
// location.latitude = 30;  // This will throw an error!
// location.longitude = 40; // This will throw an error!

console.log(`Latitude: ${location.latitude}, Longitude: ${location.longitude}`); // 10, 20

// Using the `readonly` modifier in classes
class Creature {
    readonly species: string;
    constructor(species: string) {
        this.species = species;
    }
}

// Creating an instance of the `Creature` class
const lion = new Creature('Lion');

// Trying to modify the `species` property will result in an error
// lion.species = 'Tiger'; // This will throw an error!

console.log(`The creature is a: ${lion.species}`); // 'Lion'
