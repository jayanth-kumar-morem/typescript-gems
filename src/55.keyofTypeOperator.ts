// The `keyof` type operator in TypeScript allows you to get a union of all the keys of an object's properties.

// Define a new type called 'Student' with properties 'fullName' and 'grade'.
type Student = {
    fullName: string;
    grade: number;
};

// Create an instance of the 'Student' type named 'alice'.
const alice: Student = {
    fullName: 'Alice Smith',
    grade: 20
};

// A generic function 'fetchProperty' that returns the value of a property from an object.
// The function takes in two parameters:
// 1. The object itself (of generic type 'Obj').
// 2. The key of the property we want to fetch (of generic type 'Key' which extends the keys of 'Obj').
function fetchProperty<Obj, Key extends keyof Obj>(entity: Obj, prop: Key): Obj[Key] {
    return entity[prop];
}

// Use the 'fetchProperty' function to get the 'grade' of 'alice'.
const studentGrade = fetchProperty(alice, 'grade');

// A generic function 'updateProperty' that sets the value of a property in an object.
// The function takes in three parameters:
// 1. The object itself (of generic type 'Obj').
// 2. The key of the property we want to set (of generic type 'Key' which extends the keys of 'Obj').
// 3. The value we want to set for the property (of type 'Obj[Key]').
function updateProperty<Obj, Key extends keyof Obj>(entity: Obj, prop: Key, newValue: Obj[Key]): void {
    entity[prop] = newValue;
}

// Use the 'updateProperty' function to update the 'grade' of 'alice' to 25.
updateProperty(alice, 'grade', 25);
