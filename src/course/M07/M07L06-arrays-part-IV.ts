/* eslint-disable no-console */
import { logger, showCollection } from '../../utils/logger';

logger('Tworzenie listy z elementami:');
//                     [   0,       1,        2,         3    ];
const boys: string[] = ['Janek', 'Tomek', 'Bartek', 'Krzysiek'];
showCollection(boys);

logger('Transformacje tablicy:');

logger('map() - zmiana każdego elementu tablicy');
const boysMap = boys.map((el) => el.toUpperCase());
showCollection(boysMap);
showCollection(boys);

logger('filter() - filtrowanie elementów tablicy');
// znajdź wszystkie elementy spełniające warunek
const boysFilter = boys.filter((el) => el.toLowerCase().startsWith('b') || el.toLowerCase().startsWith('j'));
showCollection(boysFilter);

logger('reduce() - zwrócenie pojedynczej wartości');
// Metoda reduce() przetwarza tablicę element po elemencie i sprowadza ją do jednej wartości.

// array.reduce((accumulator, currentValue) => {
//   // coś robimy i zwracamy nowy accumulator
// }, initialValue);

// accumulator - to jest "wynik" z poprzedniego kroku – gromadzi rezultat
// currentValue - to bieżący element z tablicy
// initialValue - wartość początkowa (np. 0 dla sumy)

const numbers: number[] = [20, 10, 30, 5];

logger('reduce() - suma liczb');
const sum = numbers.reduce((acc, number) => acc + number, 0);
console.log(sum);

logger('reduce() - połączenie stringów w text');
const boysAsTextReduce = boys.reduce((acc, name) => acc + ', ' + name);
console.log(boysAsTextReduce);

logger('reduce() - długość wszystkich imion');
const boysLength = boys.reduce((acc, name) => acc + name.length, 0);
console.log(boysLength);

logger('Szukanie elementów w tablicy:');

logger('find() - wyszukanie pierwszego pasującego elementu w tablicy');
console.log(boys.find((el) => el.startsWith('T')));

logger('findIndex() - index pierwszego pasującego elementu');
const index = boys.findIndex((el) => el.startsWith('T'));
console.log(index);
console.log(boys[index]);
