// Generic Constraints in TypeScript

// Define a type that represents the structure of a person's name.
// This type ensures that any object of this type will have both a 'givenName' and a 'familyName' as string properties.
type PersonName = { givenName: string, familyName: string };

/**
 * This function appends a 'completeName' property to the passed object.
 * The function accepts objects that have at least 'givenName' and 'familyName' properties (enforced by the generic constraint).
 * 
 * @param individual - An object that represents a person with at least 'givenName' and 'familyName' properties.
 * @returns An object that includes the original properties of the passed object and an additional 'completeName' property.
 */
function generateCompleteName<T extends PersonName>(individual: T): T & { completeName: string } {
    return {
        ...individual,
        completeName: `${individual.givenName} ${individual.familyName}`
    };
}

// Create an object representing a person named 'Alice Smith' who is 30 years old.
const alice = generateCompleteName({
    givenName: 'Alice',
    familyName: 'Smith',
    yearsOld: 30
});

// Log the 'completeName' property of the 'alice' object to the console.
console.log(alice.completeName); // Alice Smith
