// TypeScript Type Assertions:
// Sometimes, you might know the type of a value better than TypeScript does.
// In such cases, you can use type assertions to tell TypeScript about the exact type of a value.
// This doesn't change the runtime behavior of the value; it's simply a way to let TypeScript know your intent.

// For this example, let's assume we have a function `load()` that fetches data.
// We're not sure about the exact type it returns, but we expect it to be a string.
let data = load();

// Now, we want to use the `trim()` method which is available on strings.
// But TypeScript might complain if it's not sure that `data` is a string.
// This is where type assertions come in handy.

// Using the angle-bracket syntax for type assertion:
const trimmedData = (<string>data).trim();

// Note: There's another syntax for type assertions using the "as" keyword.
// const trimmedData = (data as string).trim();

// Now, `trimmedData` contains the trimmed version of the string fetched by `load()`.

function load(): any {
    return "  Sample loaded data with spaces  ";
}
