// Define a type for button sizes using Literal Unions.
// This allows us to specify a set of string values that the type can hold.
// The `(string & {})` part allows us to also accept any string value, not just the predefined ones.
type ButtonSize = 'tiny' | 'regular' | 'huge' | (string & {});

/**
 * This function takes a button size and returns its corresponding CSS padding value.
 * @param size - The size of the button ('tiny', 'regular', 'huge', or any custom CSS padding value as a string).
 * @returns The CSS padding value as a string.
 */
function determinePadding(size: ButtonSize): string {
    switch (size) {
        case 'tiny':
            return '8px';
        case 'regular':
            return '14px';
        case 'huge':
            return '20px';
        default:
            // If the size is not one of the predefined values, we assume it's a custom CSS padding value and return it as-is.
            return size;
    }
}

// Example usage:

// Declare a variable of type ButtonSize and set its initial value.
let buttonSize: ButtonSize = 'tiny';

// Change the value of the variable.
buttonSize = 'regular'; // This will correspond to '14px' when passed to the determinePadding function.
buttonSize = '5px';     // This is also valid because our type allows for any string value.
