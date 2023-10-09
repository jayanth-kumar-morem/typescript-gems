// The `Record<K, V>` utility type constructs an object type with keys of type K and values of type V.

// Here, we define a type `UserDirectory` which has keys of type string and values of an object type.
type UserDirectory = Record<string, { fullName: string; yearsOld: number }>;

// Initialize an empty object of type `UserDirectory`.
const directory: UserDirectory = {};
directory['user1'] = { fullName: 'Alice', yearsOld: 25 };
directory['user2'] = { fullName: 'Bob', yearsOld: 22 };

// The following line will throw an error because the 'yearsOld' property is missing.
// directory['user3'] = { fullName: 'Charlie' }; 

// A more verbose way to define the same type as `UserDirectory` without using the `Record` utility type.
type UserDirectoryVerbose = { [userId: string]: { fullName: string; yearsOld: number } };

// Define another type `PageDetails` to represent information about a webpage.
type PageDetails = {
    pageId: string;
    header: string;
};

// Define a type `WebPagesVerbose` to represent a collection of web pages without using the `Record` utility type.
type WebPagesVerbose = {
    landing: PageDetails;
    overview: PageDetails;
    reachUs: PageDetails;
};

// Using the `Record` utility type, we can define the same `WebPages` type more succinctly.
type WebPages = Record<'landing' | 'overview' | 'reachUs', PageDetails>;