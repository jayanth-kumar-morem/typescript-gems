// The non-null assertion operator (!) is a way to tell TypeScript 
// that an expression is non-null when you know it to be true, 
// even if TypeScript can't prove it.

// Define a type for a 2D coordinate.
type Coordinate = {
    latitude: number;
    longitude: number;
};

// Declare a variable to hold our coordinate.
let locationCoord: Coordinate;

// A function to initialize our coordinate to a default value.
function setDefaultCoord() {
    locationCoord = { latitude: 10, longitude: 20 };
}

setDefaultCoord();
// Use the non-null assertion operator to tell TypeScript 
// that locationCoord is definitely initialized here.
console.log(locationCoord!.latitude, locationCoord!.longitude);

// Define a type for a User with an optional email field.
type User = {
    username: string;
    contactInfo?: string | null | undefined;
}

// A function to simulate sending an email.
function dispatchEmail(contact: string) {
    console.log(`Dispatching email to ${contact}`);
}

// A function to ensure that a user can be contacted.
function verifyContactAvailability(user: User) {
    if (user.contactInfo == null) {
        throw new Error(`User ${user.username} cannot be reached`);
    }
}

// A function to contact a user. 
// Uses the non-null assertion operator to tell TypeScript 
// that user.contactInfo is definitely non-null here.
function reachOut(user: User) {
    verifyContactAvailability(user);
    dispatchEmail(user.contactInfo!);
}

// An alternative function to contact a user without using 
// the non-null assertion operator.
function reachOutSafely(user: User) {
    if (user.contactInfo == null) {
        throw new Error(`User ${user.username} cannot be reached`);
    }
    dispatchEmail(user.contactInfo);
}
