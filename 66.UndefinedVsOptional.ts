// Undefined vs Optional

type ExampleOptional = {
    name?: string;
};

let optional: ExampleOptional;

optional = { name: undefined }; // This is valid.
optional = { name: 'John' };    // This is also valid.

type ExamleUnion = {
    name: string | undefined;
};

let union: ExamleUnion;

union = { name: undefined }; // This is valid.
union = {};                 // This is not valid because the name property is required.

