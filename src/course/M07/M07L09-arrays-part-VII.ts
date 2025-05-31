/* eslint-disable no-console */
import { logger, showCollection } from '../../utils/logger';

logger('Tworzenie listy z elementami:');
//                     [   0,       1,        2,         3    ];
const boys: string[] = ['Janek', 'Tomek', 'Bartek', 'Krzysiek'];
showCollection(boys);

logger('push() - dodawanie elementu na koniec tablicy');
// boys.push('Michał');
const boysAfterPush = [...boys, 'Michał'];
showCollection(boysAfterPush);
showCollection(boys);

logger('pop() - usunięcie elementu z końca tablicy');
// boys.pop();
const boysAfterPop = boys.slice(0, -1);
showCollection(boysAfterPop);
showCollection(boys);

logger('unshift() - dodawanie elementu na początek tablicy');
// boys.unshift('Paweł');
const boysAfterUnshift = ['Paweł', ...boys];
showCollection(boysAfterUnshift);
showCollection(boys);

logger('shift() - usunięcie elementu na początku tablicy');
// boys.shift();
const boysAfterShift = boys.slice(1);
showCollection(boysAfterShift);
showCollection(boys);
