// TypeScript allows "declaration merging", which means that multiple interfaces 
// with the same name will be merged into a single interface.

// First declaration of the "Message" interface with a "content" property.
export interface Message {
    content: string; // This property expects a string value.
}

// Second declaration of the "Message" interface with a "data" property.
// This will be merged with the first declaration.
export interface Message {
    data: object; // This property expects an object value.
}

// A function that takes a parameter of type "Message".
// Due to declaration merging, the "Message" interface now has both "content" and "data" properties.
function processMessage(msg: Message) {
    console.log(msg.content); // Accessing the "content" property.
    console.log(msg.data);    // Accessing the "data" property.
}

// For beginners: 
// This example demonstrates how TypeScript allows you to declare multiple interfaces 
// with the same name and merges them into a single interface. This can be useful 
// in scenarios where you want to extend or add properties to existing interface declarations.
