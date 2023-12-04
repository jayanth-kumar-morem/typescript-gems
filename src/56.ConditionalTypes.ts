// TypeScript allows us to create conditional types, which can be used to 
// determine the type of a value based on certain conditions.

// Here, we're defining a conditional type named `DetermineType`.
// This type will check the type of a given value and return a string representation of that type.
export type DetermineType<ValueType> =
    ValueType extends string ? "text" :
    ValueType extends number ? "digit" :
    ValueType extends boolean ? "truthValue" :
    ValueType extends undefined ? "noValue" :
    ValueType extends Function ? "func" :
    "obj";

// This function, `identifyType`, accepts a value of any type.
// It returns the string representation of the type of the provided value.
function identifyType<ValueType>(value: ValueType): DetermineType<ValueType> {
    return typeof value as DetermineType<ValueType>;
}

// Let's test our conditional type and function:

// This will log "text" because the provided value is a string.
console.log(identifyType("TypeScript Rocks!")); 

// This will log "digit" because the provided value is a number.
console.log(identifyType(456)); 

// This will log "truthValue" because the provided value is a boolean.
console.log(identifyType(false)); 

// This will log "noValue" because the provided value is undefined.
console.log(identifyType(undefined)); 

// This will log "func" because the provided value is a function.
console.log(identifyType(() => { console.log("I'm a function!"); })); 

// This will log "obj" because the provided value is an object.
console.log(identifyType({ name: "John", age: 30 })); 
