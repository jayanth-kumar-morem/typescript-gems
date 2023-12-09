// Template Literal Types in TypeScript

// A basic string type declaration.
let greeting: string = "Hi";

// A string literal type allows only a specific string value.
let greetingLiteral: "Hi" = "Hi";
greetingLiteral = "something different"; // Error: Type '"something different"' is not assignable to type '"Hi"'.

// A template literal type can embed expressions.
let templateType: `Message: ${string}`;
templateType = "Message: Welcome to TypeScript";
templateType = "No Message Prefix:"; // Error: Type '"No Message Prefix:"' is not assignable to type '`Message: ${string}`'.

// Define a type for CSS values using template literals.
type DimensionValue =
| number
| `${number}pt`
| `${number}vh`
| `${number}vw`

// A function to handle different CSS values.
function getDimension(value: DimensionValue) {
    if (typeof value === 'number') {
        return `${value}pt`;
    }
    return value;
}

getDimension(15); // returns '15pt'
getDimension('15pt'); // returns '15pt'
getDimension('15'); // Error: Argument of type '"15"' is not assignable to parameter of type 'DimensionValue'.

// Combining string literals to create more complex types.
type ShirtSize = 'xs' | 's' | 'm';
type ShirtColor = 'black' | 'white' | 'gray';
type ShirtStyle = `${ShirtSize}-${ShirtColor}`;

function setShirtStyle(style: ShirtStyle) {
    // Implementation here...
}

setShirtStyle('xs-black'); // OK
setShirtStyle('s-white'); // OK
setShirtStyle('m-gray'); // OK
setShirtStyle('s-yellow'); // Error: Argument of type '"s-yellow"' is not assignable to parameter of type 'ShirtStyle'.
