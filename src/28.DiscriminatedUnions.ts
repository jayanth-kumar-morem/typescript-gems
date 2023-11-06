// Discriminated Unions in TypeScript allow us to express a value 
// that could be one of several types. Each type in the union is 
// typically tagged with a unique property, which helps in 
// distinguishing between them.

// Let's explore this concept with some examples:

// Here, we define two types: Ellipse and Rectangle.
// Each type has a unique 'type' property that acts as a tag.
type Ellipse = { type: "ellipse", semiMajorAxis: number, semiMinorAxis: number };
type Rectangle = { type: "rectangle", width: number, height: number };

// The GeometricShape type can be either an Ellipse or a Rectangle.
type GeometricShape = Ellipse | Rectangle;

// This function calculates the area of a given GeometricShape.
function calculateArea(shape: GeometricShape) {
    switch (shape.type) {
        case "ellipse":
            // Area of an ellipse = π * semiMajorAxis * semiMinorAxis
            return Math.PI * shape.semiMajorAxis * shape.semiMinorAxis;
        case "rectangle":
            // Area of a rectangle = width * height
            return shape.width * shape.height;
    }
}

// For another example, let's consider a validation scenario.
// A validation can either succeed or fail.

// If the validation succeeds, it has a value.
type SuccessValidation = {
    didPass: true;
    value: string;
};

// If the validation fails, it has an error message.
type FailedValidation = {
    didPass: false;
    error: string;
};

// The ValidationOutcome type can be either a SuccessValidation or a FailedValidation.
type ValidationOutcome = SuccessValidation | FailedValidation;

// This function logs the result of a given validation.
function displayOutcome(outcome: ValidationOutcome) {
    if (outcome.didPass) {
        console.log(`Success: ${outcome.value}`);
    } else {
        console.log(`Error: ${outcome.error}`);
    }
}
