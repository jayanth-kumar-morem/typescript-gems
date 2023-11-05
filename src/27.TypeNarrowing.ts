// Type narrowing in TypeScript allows you to narrow down the type of a variable within certain areas of your code.

// This function demonstrates type narrowing using the 'typeof' type guard.
function addPadding(inputText: string, paddingValue: string | number) {
    // If paddingValue is a number, add that many spaces before the inputText.
    if (typeof paddingValue === 'number') {
        return Array(paddingValue + 1).join('-') + inputText;
    }
    // If paddingValue is a string, add the string before the inputText.
    if (typeof paddingValue === 'string') {
        return paddingValue + inputText;
    }
    // If paddingValue is neither a string nor a number, throw an error.
    throw new Error("Expected string or number, got '" + paddingValue + "'.");
}

console.log(addPadding("TypeScript Rocks", 3)); // returns "---TypeScript Rocks"
console.log(addPadding("TypeScript Rocks", "*")); // returns "*TypeScript Rocks"

// This section demonstrates type narrowing using the 'instanceof' type guard.
class Feline {
    purr() {
        console.log('Purr!');
    }
}

class Canine {
    bark() {
        console.log('Bark!');
    }
}

type Pet = Feline | Canine;

function emitSound(pet: Pet) {
    if (pet instanceof Feline) {
        pet.purr(); // OK, because Feline has the purr method.
    }
    else if (pet instanceof Canine) {
        pet.bark(); // OK, because Canine has the bark method.
    }
    else {
        // The 'never' type represents values that should never occur.
        // let _unreachableCode: never = pet;
    }
}

// This section demonstrates type narrowing using the 'in' type guard.
type Circle = {
    radius: number;
}

type Triangle = {
    base: number;
    height: number;
}

type GeometricShape = Circle | Triangle;

function calculateArea(shape: GeometricShape) {
    // If the shape has a 'radius' property, it's a Circle.
    if ('radius' in shape) {
        return 3.14 * shape.radius * shape.radius;
    }
    // Otherwise, it's a Triangle.
    else {
        return 0.5 * shape.base * shape.height;
    }
}

console.log(calculateArea({ radius: 5 })); // 78.5 (approx value for πr^2)
console.log(calculateArea({ base: 5, height: 10 })); // 25 (value for 0.5 * base * height)
