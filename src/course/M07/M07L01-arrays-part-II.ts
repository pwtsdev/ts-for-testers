import { logger } from '../../utils/logger';

/* eslint-disable no-console */
logger('Tworzenie pustej  listy:');
const names = new Array<string>(10);
console.log(names);

const emptyArray: string[] = [];
console.log(emptyArray);

logger('Tworzenie listy z elementami:');
//                     [   0,       1,        2,         3    ];
const boys: string[] = ['Janek', 'Tomek', 'Bartek', 'Krzysiek'];
console.log(boys);

const numbers: number[] = [20, 10, 30, 5];
console.log(numbers);

logger('Wyciąganie elementów z listy:');
console.log(boys[0]);
console.log(boys[2]);
console.log(boys[boys.length - 1]);

console.log(boys.at(0));
console.log(boys.at(-1));

logger('Nadpisywanie elementu na danym indexie:');
boys[0] = 'Marcin';
console.log(boys);

const newBoys = boys.with(1, 'Grzesiek');
console.log(newBoys);
console.log(boys);
