/* eslint-disable @typescript-eslint/no-misused-spread */
/* eslint-disable no-console */
import { logger, showCollection } from '../../utils/logger';

logger('Tworzenie listy z elementami:');
const girls: string[] = ['Asia', 'Kasia', 'Zosia', 'Małgosia'];
const boys: string[] = ['Janek', 'Tomek', 'Krzyśiek', 'Marcin'];
const numbers: number[] = [20, 10, 30, 5];

logger('Czy wszystkie elementy tablicy spełniają warunek:');
const girlsEndsWithA = girls.every((el) => el.endsWith('a'));
console.log(girlsEndsWithA);

logger('Czy chociaż jeden element spełnia warunek:');
const someStartsWithZ = girls.some((el) => el.startsWith('Z'));
console.log(someStartsWithZ);

logger('Wycinanie i kopiowanie tablicy:');

logger('slice() - zwraca nową tablicę (nie mutuje)');

// 1 – indeks początkowy (włącznie),
// 4 – indeks końcowy (bez tego elementu),

showCollection(boys);
console.log(boys.slice(0, 3));

// splice() - mutuje
logger('toSpliced() - usuwa lub dodaje elementy');

showCollection(boys);
console.log(boys.toSpliced(0, 3));
console.log(boys.toSpliced(0, 3, 'Bartek'));

logger('Łączenie tablic:');
const all = boys.concat(girls);
console.log(all);

logger('Operator rozproszenia  ...');
// (spread operator) rozpakowuje elementy tablicy, obiekty lub stringa.

const boysAndGirls = ['👱', ...boys, '👧', ...girls];
console.log(boysAndGirls);
console.log(boys.toSpliced(0, 3, ...girls));

logger('Kopiowanie tablicy za pomocą operatora rozproszenia');
const newBoys = [...boys];
console.log(newBoys);

logger('Łączenie tablic z rózbymi typami:');
const boysAndNumbers1 = [...boys, ...numbers];
showCollection(boysAndNumbers1);

logger('Spread jako argumenty funkcji');
const max = Math.max(...numbers);
console.log(max);

logger('Rozbijanie stringa na litery');
const name = 'Bartek';
const letters = [...name];
console.log(letters);
