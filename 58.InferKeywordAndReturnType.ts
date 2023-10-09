// Using the `infer` keyword to determine the type within a generic type.

// Check if a type is an array and return its member type or a default type.
type CheckIfArray<Type> = Type extends Array<infer Element> ? 'list' : 'non-list';

// Using our CheckIfArray type to determine if a type is an array.
type WithList = CheckIfArray<number[]>;  // This will be 'list'
type WithoutList = CheckIfArray<boolean>;  // This will be 'non-list'

// Extract the member type from an array or return the original type if it's not an array.
type ExtractFromArray<Type> = Type extends Array<infer Element> ? Element : Type;

// Using our ExtractFromArray type to get the member type of arrays or return the original type.
type ExtractedFromNumList = ExtractFromArray<number[]>;  // This will be 'number'
type ExtractedFromBoolList = ExtractFromArray<boolean[]>;  // This will be 'boolean'
type ExtractedFromBool = ExtractFromArray<boolean>;  // This will be 'boolean'

// A function to create a user object from given names.
export function buildUser(givenName: string, familyName: string) {
    return {
        givenName,
        familyName
    };
}

// Using the `ReturnType` utility type to get the return type of a function.
// Here, we're getting the return type of the `buildUser` function.
function displayUser(user: ReturnType<typeof buildUser>) {
    console.log(`${user.givenName} ${user.familyName}`);
}