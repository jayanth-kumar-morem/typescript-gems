// Types vs Interfaces

// Interfaces are a way to define the shape of an object.
// Here, we define an interface for the properties of a form field.
export interface FormFieldProps {
    fieldType: 'username' | 'password';  // The type of the form field.
    content: string;                     // The content or value of the form field.
    onContentChange: (updatedContent: string) => void;  // A function that gets called when the content changes.
}

// Types can be used to define custom types.
// Here, we define types for the form field's properties.

// A type for the function that gets called when the content of the form field changes.
type OnContentChangeFunction = (updatedContent: string) => void;

// A type for the content or value of the form field.
type FormFieldContent = string;

// A type for the possible types of the form field.
type FormFieldType = 'username' | 'password';

// We can then use these types to define the shape of an object.
export type FormFieldPropsUsingTypes = {
    fieldType: FormFieldType;
    content: FormFieldContent;
    onContentChange: OnContentChangeFunction;
}

// Notes:
// type:
// 1. Unions: Allows a value to be one of several types (e.g., 'username' | 'password').
// 2. Intersection(&): Combines multiple types into one.
// 3. Primitives: Basic types like string, number, boolean.
// 4. Shorthand functions: Define functions in a concise way.
// 5. Advanced Type functions: More complex type manipulations.

// interface:
// 1. Declaration Merging: Multiple interface declarations with the same name get merged.
// 2. Familiarity (extends): Interfaces can extend other interfaces, inheriting their properties.
