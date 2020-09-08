///////////////////////////////////////////////////////////////
// Variadic Tuple Types
///////////////////////////////////////////////////////////////

/*
    Variadic function - funkce akceptující nedefinovaný počet argumentů
    Variadic tuple - n-tice s nedefinovaným počtem prvků
*/

// bez typů
// function concat(arr1, arr2) {
//     return [...arr1, ...arr2];
// }

// "typově ošetřené" overloady - death by thousands overloads
// declare function concat(arr1: [], arr2: []): [];
// declare function concat<A>(arr1: [A], arr2: []): [A];
// declare function concat<A, B>(arr1: [A, B], arr2: []): [A, B];
// declare function concat<A, B, C>(arr1: [A, B, C], arr2: []): [A, B, C];
// declare function concat<A, B, C, D>(arr1: [A, B, C, D], arr2: []): [A, B, C, D];
// declare function concat<A, B, C, D, E>(arr1: [A, B, C, D, E], arr2: []): [A, B, C, D, E];
// declare function concat<A, B, C, D, E, F>(arr1: [A, B, C, D, E, F], arr2: []): [A, B, C, D, E, F];
// declare function concat<A2>(arr1: [], arr2: [A2]): [A2];
// declare function concat<A1, A2>(arr1: [A1], arr2: [A2]): [A1, A2];
// declare function concat<A1, B1, A2>(arr1: [A1, B1], arr2: [A2]): [A1, B1, A2];
// declare function concat<A1, B1, C1, A2>(arr1: [A1, B1, C1], arr2: [A2]): [A1, B1, C1, A2];
// declare function concat<A1, B1, C1, D1, A2>(arr1: [A1, B1, C1, D1], arr2: [A2]): [A1, B1, C1, D1, A2];
// declare function concat<A1, B1, C1, D1, E1, A2>(arr1: [A1, B1, C1, D1, E1], arr2: [A2]): [A1, B1, C1, D1, E1, A2];
// declare function concat<A1, B1, C1, D1, E1, F1, A2>(arr1: [A1, B1, C1, D1, E1, F1], arr2: [A2]): [A1, B1, C1, D1, E1, F1, A2];
// declare function concat<...

// nelze jednoduše?
// declare function concat<T, U>(arr1: T[], arr2: U[]): Array<T | U>;

function tail<T extends unknown[]>(arr: readonly [unknown, ...T]) {
    const [, ...rest] = arr;
    return rest;
}

const myTuple = [1, 2, 3, 4] as const
const myArray = ["hello", "world"];


const r1 = tail(myTuple);

const r2 = tail([...myTuple, ...myArray]);

type Strings = [string, string];
type Numbers = number[];
type Unbounded = [...Strings, ...Numbers, boolean];

function a(...aaa: Unbounded) {
    const [x, y, z, q] = aaa
}

type Arr = readonly unknown[];

function concat<T extends Arr, U extends Arr>(arr1: T, arr2: U): [...T, ...U] {
  return [...arr1, ...arr2];
}

concat(["","", false], [0, 0, false])