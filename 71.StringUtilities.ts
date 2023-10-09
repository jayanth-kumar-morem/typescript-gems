// TypeScript String Utilities

// Uppercase utility: Converts all characters in a string to uppercase.
type musicBand = Uppercase<'beatles'>; // 'BEATLES'

// Capitalize utility: Converts the first character in a string to uppercase.
type foodType = Capitalize<'burger'>; // 'Burger'

// Uncapitalize utility: Converts the first character in a string to lowercase.
type programmingLanguage = Uncapitalize<'JavaScript'>; // 'javaScript'

// Lowercase utility: Converts all characters in a string to lowercase.
type animalName = Lowercase<'ELEPHANT'>; // 'elephant'

// Explanation for beginners:

// In TypeScript, we can use utility types to transform strings in various ways.
// The above examples demonstrate some of the string utility types provided by TypeScript.

// 1. Uppercase: This utility will convert the entire string to uppercase letters.
//    Example: 'beatles' becomes 'BEATLES'.

// 2. Capitalize: This utility will convert only the first letter of the string to uppercase.
//    Example: 'burger' becomes 'Burger'.

// 3. Uncapitalize: This utility will convert only the first letter of the string to lowercase.
//    Example: 'JavaScript' becomes 'javaScript'.

// 4. Lowercase: This utility will convert the entire string to lowercase letters.
//    Example: 'ELEPHANT' becomes 'elephant'.
