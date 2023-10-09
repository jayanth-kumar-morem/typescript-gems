// A basic implementation of a Queue data structure.
class Queue {
    // An array to hold the items in the queue.
    data = [];

    // Method to add an item to the end of the queue.
    push(item) {
        this.data.push(item);
    }

    // Method to remove and return the first item from the queue.
    pop() {
        return this.data.shift();
    }
}

// A specialized Queue that only allows numbers.
class NumberQueue extends Queue {
    // Override the push method to ensure only numbers are added.
    push(item: number) {
        super.push(item); // Call the push method of the parent class.
    }

    // Override the pop method to indicate it returns a number.
    pop(): number {
        return super.pop();
    }
}

// Create an instance of the basic Queue.
const queue = new Queue();
queue.push(0);
queue.push("1"); // This is a mistake since we're adding a string to a number queue.

// Pop items from the queue and print them.
console.log(queue.pop().toPrecision(1)); // This will work.
console.log(queue.pop().toPrecision(1)); // This will cause a RUNTIME ERROR since "1" is a string.

// A generic implementation of a Queue that can hold any type.
class Queue<T> {
    data = [];

    // Add an item of type T to the queue.
    push(item: T) {
        this.data.push(item);
    }

    // Remove and return an item of type T from the queue.
    pop(): T {
        return this.data.shift();
    }
}

// Create an instance of the generic Queue to hold numbers.
const numberQueue = new Queue<number>();
numberQueue.push(0);
numberQueue.push(1); // This is correct since we're adding a number to a number queue.

// Pop items from the number queue and print them.
console.log(numberQueue.pop().toPrecision(1)); // This will work.
console.log(numberQueue.pop().toPrecision(1)); // This will also work.
