import { logger, showCollection } from '../../utils/logger';

/* eslint-disable no-console */
logger('Tworzenie pustej  listy:');
const names = new Array<string>(10);
showCollection(names);

const emptyArray: string[] = [];
console.log(emptyArray);

logger('Tworzenie listy z elementami:');
//                     [   0,       1,        2,         3    ];
const boys: string[] = ['Janek', 'Tomek', 'Bartek', 'Krzysiek'];
showCollection(boys);

const numbers: number[] = [20, 10, 30, 5];
showCollection(numbers);

logger('Wyciąganie elementów z listy:');
console.log(boys[0]);
console.log(boys[2]);
console.log(boys[boys.length - 1]);

console.log(boys.at(0));
console.log(boys.at(-1));

logger('Nadpisywanie elementu na danym indexie:');
boys[0] = 'Marcin';
console.log(boys);
showCollection(boys);

const newBoys = boys.with(1, 'Grzesiek');
showCollection(newBoys);
showCollection(boys);
