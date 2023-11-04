// Using Literal Types in TypeScript

// Without literal types, a variable can hold any string value.
let travelDirection: string;

travelDirection = 'Forward'; // This is valid
travelDirection = 'f0rw4rd'; // This is valid, but not meaningful

// With literal types, you can specify the exact string values a variable can hold.
let preciseDirection: "Forward" | "Right" | "Backward" | "Left";

preciseDirection = 'Forward'; // This is valid
preciseDirection = 'f0rw4rd'; // This will cause an error

// You can also define a custom type using literal types for better readability and reusability.
type MovementDirection = "Forward" | "Right" | "Backward" | "Left";

let direction: MovementDirection;

direction = 'Forward'; // This is valid
direction = 'f0rw4rd'; // This will cause an error

// Functions can also use these custom literal types as parameters.
function travel(distance: number, direction: MovementDirection) {
    console.log(`Travelling ${distance} kilometers ${direction}`);
}

// Literal types can also be used with numbers.
type SpinnerValue = 1 | 2 | 3 | 4 | 5 | 6;

function spinWheel(){
    // The 'as SpinnerValue' part ensures that the random number is treated as one of the allowed values.
    return (Math.floor(Math.random() * 6) + 1) as SpinnerValue;
}

if (spinWheel() === 6) {
    console.log("You got the maximum spin value!");
}

// This will cause an error because 7 is not one of the allowed values for SpinnerValue.
if (spinWheel() === 7) {
    console.log("This won't compile!");
}
