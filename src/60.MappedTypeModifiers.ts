// Mapped type modifiers

// The `TransformedType` is a mapped type that allows you to create a new type
// by transforming properties of an existing type. In this case, we're making
// all properties of the type `T` optional using the `?` modifier.
export type TransformedType<U> = {
    [Key in keyof U]?: U[Key];
};

// The `DataContainer` class is a generic class that holds a state of type `T`.
// It provides a method to update its state using the `TransformedType`.
export class DataContainer<U> {
    // The constructor initializes the state.
    constructor(public dataState: U) { }

    // The `modify` method allows you to update the state.
    // It uses the spread operator to merge the current state with the updates.
    modify(updates: TransformedType<U>) {
        this.dataState = { ...this.dataState, ...updates };
    }
}

// Create an instance of the `DataContainer` class with an initial state.
const dataContainer = new DataContainer({ username: 'Bob', years: 18 });

// Update the state using the `modify` method.
dataContainer.modify({ years: 25 });

// Log the updated state to the console.
console.log(dataContainer.dataState); // Outputs: { username: 'Bob', years: 25 }
