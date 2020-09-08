///////////////////////////////////////////////////////////////
// Labeled Tuple Elements
///////////////////////////////////////////////////////////////

type Name = 
    | [first: string, last: string]
    | [first: string, middle: string, last: string]

declare function createPerson(...name: Name): string;

createPerson("Lukáš", "Rada");
createPerson("Lukáš", "Test", "Rada");