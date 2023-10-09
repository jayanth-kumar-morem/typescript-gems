// Definite Assignment Assertion in TypeScript

// Declare a variable using the 'Definite Assignment Assertion' operator (!).
// This tells TypeScript that the variable will be definitely assigned a value later.
let coinFlipResult!: number;

// Define a function to simulate flipping a coin.
function flipCoin() {
    // Assign a random value between 1 and 2 (inclusive) to simulate a coin flip.
    // 1 represents 'Heads' and 2 represents 'Tails'.
    coinFlipResult = Math.floor(Math.random() * 2) + 1;
}

// Call the function to flip the coin.
flipCoin();

// Log the result of the coin flip to the console.
console.log(coinFlipResult);  // Outputs either 1 (Heads) or 2 (Tails).

// Define a type 'Coordinate' to represent a point in a 2D space.
type Coordinate = {
    // Use the 'Definite Assignment Assertion' operator for x and y properties.
    xCoord!: number;
    yCoord!: number;

    // Constructor method to initialize the Coordinate object.
    constructor(): void {
        this.setRandomPosition();
    }

    // Method to set random values for x and y properties.
    setRandomPosition(): void {
        // Assign a random value between 0 and 9 (inclusive) for x and y properties.
        this.xCoord = Math.floor(Math.random() * 10);
        this.yCoord = Math.floor(Math.random() * 10);
    }
}

// Note: The 'Definite Assignment Assertion' operator (!) is used when we are sure that a variable or property
// will be assigned a value before it's accessed, but TypeScript can't infer that from the code structure.
