/* eslint-disable no-console */
import { logger, showCollection } from '../../utils/logger';

logger('Tworzenie listy z elementami:');
//                     [   0,       1,        2,         3    ];
const boys: string[] = ['Janek', 'Tomek', 'Bartek', 'Krzysiek'];
showCollection(boys);

logger('push() - dodawanie elementu na koniec tablicy');
boys.push('Michał');
showCollection(boys);

logger('pop() - usunięcie elementu z końca tablicy');
boys.pop();
showCollection(boys);

logger('unshift() - dodawanie elementu na początek tablicy');
boys.unshift('Paweł');
showCollection(boys);

logger('shift() - usunięcie elementu na początku tablicy');
boys.shift();
showCollection(boys);

logger('długość tablicy');
console.log(boys.length);

logger('includes() - sprawdzenie czy tablica zawiera element');
console.log(boys.includes('Tomek'));

logger('indexOf() - index pierwszego wystąpienia');
boys.push('Tomek');
showCollection(boys);
console.log(boys.indexOf('Tomek'));

logger('join() - połączenie tablicy w string');
const boysAsText = boys.join(', ');
console.log(boysAsText);
