/**
 * The `Animal` class represents a generic animal.
 */
class Animal {
    // `protected` means the property can be accessed within the class and its subclasses.
    // It cannot be accessed outside of these classes.
    protected name: string;

    /**
     * The constructor is a special method that gets called when an instance of the class is created.
     * @param name - The name of the animal.
     */
    constructor(name: string) {
        this.name = name;
    }

    /**
     * This method allows the animal to move.
     * @param distance - The distance the animal moves. Default is 0.
     */
    public move(distance: number = 0): void {
        console.log(`${this.name} moved ${distance}m.`);
    }
}

// Create a new instance of the `Animal` class.
let cat = new Animal("Cat");
cat.move(10);

// This will throw an error because the `name` property is protected.
// Protected properties cannot be accessed outside of the class and its subclasses.
// cat.name; // Uncommenting this line will result in an error.

/**
 * The `Bird` class is a subclass of `Animal`.
 * It inherits properties and methods from the `Animal` class.
 */
class Bird extends Animal {
    /**
     * This method allows the bird to fly.
     * @param distance - The distance the bird flies. Default is 0.
     */
    fly(distance: number = 0): void {
        console.log(`${this.name} flew ${distance}m.`);
    }
}

// Note: 
// - `private` properties can only be accessed within the class they are defined.
// - `protected` properties can be accessed within the class and its subclasses.
