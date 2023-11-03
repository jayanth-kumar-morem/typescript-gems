// Using Union Types in TypeScript
// Union types allow a variable or parameter to accept multiple types.

// Function to clean up and format input commands
function cleanInput(inputData: string | string[]) {
    let result = '';

    // Check if inputData is of type 'string'
    if (typeof inputData === 'string') {
        result = inputData.trim();
    } 
    // Check if inputData is an array of strings
    else {
        // Trim each string in the array and join them with a space
        result = inputData.map(item => item.trim()).join(' ');
    }
    return result;
}

console.log(cleanInput('greetings ')); // 'greetings'
console.log(cleanInput(['greetings ', 'universe  '])); // 'greetings universe'
// console.log(cleanInput(456456)); // Error: Argument of type 'number' is not assignable to parameter of type 'string | string[]'.

// Function to add padding to a string
function addPadding(text: string, padValue: number | string) {
    // Check if padValue is of type 'number'
    if (typeof padValue === 'number') {
        // Create an array of spaces of length (padValue + 1) and join them
        return Array(padValue + 1).join(' ') + text;
    } 
    // Check if padValue is of type 'string'
    else if (typeof padValue === 'string') {
        return padValue + text;
    }
    // If padValue is neither a string nor a number, throw an error
    throw new Error(`Expected string or number for padding, but received '${padValue}'.`);
}

console.log(addPadding('Universe says', 4)); // returns "    Universe says"
console.log(addPadding('Universe says', '-')); // returns "-Universe says"
// console.log(addPadding('Universe says', true)); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
