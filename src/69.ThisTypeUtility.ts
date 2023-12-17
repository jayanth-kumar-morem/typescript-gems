// Define a custom type named 'ArithmeticOperations'.
// This type describes an object that has two methods: 'increase' and 'decrease'.
type ArithmeticOperations = {
    increase(): void,
    decrease(): void,
}

// Create an object named 'operations' that implements the 'ArithmeticOperations' type.
// Additionally, it uses the 'ThisType' utility to specify that the 'this' context inside the methods will have a 'count' property of type number.
export const operations: ArithmeticOperations & ThisType<{count: number}> = {
    // The 'increase' method doubles the 'count' property of the object it's called on.
    increase() {
        this.count *= 3; // Changed from doubling to tripling for variety.
    },
    // The 'decrease' method halves the 'count' property of the object it's called on.
    decrease() {
        this.count /= 3; // Changed from halving to dividing by 3 for variety.
    },
};

// Create an object named 'data' that has a 'count' property initialized to 3.
// Spread the 'operations' object into 'data', so 'data' has both the 'count' property and the methods from 'operations'.
const data = {
    count: 3, // Changed initial value from 1 to 3.
    ...operations,
};

// Call the 'increase' method on 'data'. This will triple the 'count' property.
data.increase();
console.log(data.count); // Outputs: 9 (because 3 tripled is 9)

// Call the 'decrease' method on 'data'. This will divide the 'count' property by 3.
data.decrease();
console.log(data.count); // Outputs: 3 (because 9 divided by 3 is 3)
