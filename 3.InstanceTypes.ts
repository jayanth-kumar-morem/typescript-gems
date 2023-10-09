// TypeScript provides built-in utility types and classes that can be used to enhance your code.

// 1. Using RegExp (Regular Expression) in TypeScript:
// Here, we're creating a new regular expression pattern to match the string 'abc'.
let pattern = new RegExp('abc');

// 2. Arrays in TypeScript:
// We're defining an array of numbers using the `Array` generic type.
// The `<number>` part ensures that this array can only contain numbers.
let numberList: Array<number> = [1, 2, 3];

// 3. Sets in TypeScript:
// A Set is a collection of values where each value must be unique.
// Here, we're defining a set of numbers using the `Set` generic type.
let uniqueNumbers: Set<number> = new Set([1, 2, 3]);

// 4. Creating a Generic Class:
// Generics allow you to define the type of an item dynamically.
// In this example, we're creating a simple Queue class that can work with any data type.

class SimpleQueue<T> {
    // An array to hold the items in the queue.
    private items: Array<T> = [];
    
    // Method to add an item to the end of the queue.
    enqueue(item: T) {
        this.items.push(item);
    }
    
    // Method to remove and return the first item from the queue.
    // If the queue is empty, it returns `undefined`.
    dequeue(): T | undefined {
        return this.items.shift();
    }
}

// Using the Generic Class:
// Here, we're creating a new queue that will hold strings.
let stringQueue: SimpleQueue<string> = new SimpleQueue();

// Adding items to the queue.
stringQueue.enqueue('item1');
stringQueue.enqueue('item2');

