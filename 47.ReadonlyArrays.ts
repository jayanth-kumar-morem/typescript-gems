// Immutable Arrays and Coordinate Pairs

// This function takes an array of integers, sorts it, and then reverses it.
// However, it mutates the original array.
function sortAndInvert(numbers: number[]): number[] {
return numbers.sort().reverse();
}

const initialNumbers = [3, 6, 2, 8, 4];
const invertedNumbers = sortAndInvert(initialNumbers);

console.log(invertedNumbers); // [8, 6, 4, 3, 2]
console.log(initialNumbers); // [8, 6, 4, 3, 2] - Note! The original array has changed.

// This function is a modified version that prevents mutation of the original array.
function sortAndInvertImmutable(numbers: readonly number[]): number[] {
return numbers.slice().sort().reverse();
}

const initialImmutable = [3, 6, 2, 8, 4];
const invertedImmutable = sortAndInvertImmutable(initialImmutable);

console.log(initialImmutable); // [3, 6, 2, 8, 4]
console.log(invertedImmutable); // [8, 6, 4, 3, 2]

// A type representing a 2D coordinate.
type Coordinate = [number, number];

// This function moves a coordinate by x and y values.
// However, it mutates the original coordinate.
function shiftCoordinate(coord: Coordinate, deltaX: number, deltaY: number): Coordinate {
    coord[0] += deltaX;
    coord[1] += deltaY;
    return coord;
}

const originalCoord: Coordinate = [2, 2];
const shiftedCoord = shiftCoordinate(originalCoord, 4, 4);

console.log(originalCoord); // [6, 6]
console.log(shiftedCoord); // [6, 6]

// A modified version of the Coordinate type that is read-only.
type ImmutableCoordinate = readonly [number, number];

// This function is a modified version that prevents mutation of the original coordinate.
function shiftImmutableCoordinate(coord: ImmutableCoordinate, deltaX: number, deltaY: number): Coordinate {
    return [coord[0] + deltaX, coord[1] + deltaY];
}

const originalImmutableCoord: Coordinate = [2, 2];
const shiftedImmutableCoord = shiftImmutableCoordinate(originalImmutableCoord, 4, 4);

console.log(originalImmutableCoord); // [2, 2]
console.log(shiftedImmutableCoord); // [6, 6]
