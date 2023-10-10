// 1. Target Compiler Option:
// TypeScript allows you to compile your code to different versions of JavaScript.
// The "target" compiler option in the tsconfig.json file determines which version of JavaScript the TypeScript code will be compiled to.
// For example, setting "target": "es5" will compile your TypeScript code to ES5-compatible JavaScript.

// 2. ES5 vs ES6/ES2015:
// ES5 and ES6 (also known as ES2015) are versions of the ECMAScript standard, which defines the core features of JavaScript.
// ES6 introduced many new features like arrow functions, classes, and template literals.

// Let's see an example of an arrow function (an ES6 feature):
const greet = (name: string) => `Hello, ${name}!`;
console.log(greet("Alice")); // Outputs: Hello, Alice!

// 3. WeakMap:
// A WeakMap is a special type of Map that allows garbage collection of its keys.
// If an object used as a key in a WeakMap is no longer referenced outside the WeakMap, it can be garbage collected.
// This can be useful for associating private data with objects without preventing those objects from being garbage collected.

const weakmap = new WeakMap<object, string>();

const obj = { id: 1 };
weakmap.set(obj, "This is private data associated with obj.");

// Note: You can't iterate over a WeakMap's keys or values, which ensures the privacy of the data.

// 4. #name vs name:
// In TypeScript (and modern JavaScript), classes can have private fields.
// Fields prefixed with a '#' are truly private and can't be accessed outside the class.
// Fields without the '#' are public by default and can be accessed from outside the class.

class Person {
    #privateName: string; // Truly private field
    publicName: string;   // Public field (can be accessed outside the class)

    constructor(name: string) {
        this.#privateName = name;
        this.publicName = name;
    }

    greet() {
        // We can access both private and public fields inside the class.
        console.log(`Hello, my private name is ${this.#privateName} but you can call me ${this.publicName}.`);
    }
}

const bob = new Person("Bob");
bob.greet(); // Outputs: Hello, my private name is Bob but you can call me Bob.
// console.log(bob.#privateName); // This will throw an error because #privateName is private.
console.log(bob.publicName); // Outputs: Bob
