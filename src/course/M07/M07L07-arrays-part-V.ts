/* eslint-disable no-console */
import { logger, showCollection } from '../../utils/logger';

logger('Tworzenie listy z elementami:');
//                     [   0,       1,        2,         3    ];
const boys: string[] = ['Janek', 'Tomek', 'Bartek', 'Krzysiek'];
showCollection(boys);

logger('Sortowanie i odwracanie:');

// sort() - sortuje alfabetycznie rosnąco (domyślnie)
// !!! mutuje oryginalną tablicę
// boys.sort();

// toSorted() - sortuje alfabetycznie rosnąco (domyślnie)
// !!! nie mutuje oryginalnej tablicy, tworzy nową tablicę
const boysSorted = boys.toSorted();
showCollection(boysSorted);
showCollection(boys);

// odwracanie tablicy
// odwracanie to nie sortowanie od Z do A!!!
// mutuje tablicę
// boys.reverse();

const boysReversed = boys.toReversed();
showCollection(boysReversed);
showCollection(boys);

logger('Sortowanie Z do A');
showCollection(boys);
console.log(boys.toSorted());
console.log(boys.toSorted().toReversed());

logger('Sortowanie liczb:');
const numbers: number[] = [20, 10, 30, 5];

console.log(numbers.toSorted());

logger('Sortowanie liczb rosnąco:');
console.log(numbers.toSorted((a, b) => a - b));

logger('Sortowanie liczb malejąco:');
console.log(numbers.toSorted((a, b) => b - a));
