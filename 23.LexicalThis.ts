// Understanding the behavior of 'this' in arrow functions

class Individual {
    private _years: number; // Private variable to store age

    // Constructor to initialize the age of the individual
    constructor(initialAge: number) {
        this._years = initialAge;
    }

    // Arrow function to increment the age
    // Arrow functions capture the 'this' value of the enclosing context
    getOlder = () => {
        this._years++;
    }

    // Method to retrieve the current age
    currentAge = () => {     
        return this._years;
    }
}

// Create a new instance of the Individual class with an initial age of 5
const human = new Individual(5);

// Increment the age by 1
human.getOlder();

// Schedule the getOlder function to be called after 1000ms (1 second)
// Since it's an arrow function, it will correctly increment the age even when called outside its class context
setTimeout(human.getOlder, 1000); // Will this increment the age?

// After the timeout, the age will be incremented by 1
// So, the expected output here is 7 (5 initial + 1 from getOlder + 1 from setTimeout)
console.log(human.currentAge()); // 7

// Assign the getOlder function to a new variable
let ageIncrementer = human.getOlder;

// Try to increment the age using the new variable
// This will work because the arrow function captures the 'this' value from its original context
ageIncrementer(); 
