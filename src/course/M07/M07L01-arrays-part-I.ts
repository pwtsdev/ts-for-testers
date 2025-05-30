/* eslint-disable no-console */
import { logger } from '../../utils/logger';

logger('Tworzenie pustej  listy:');
const names = new Array<string>(10);
console.log(names);

const emptyArray: string[] = [];
console.log(emptyArray);

logger('Tworzenie listy z elementami:');
const boys: string[] = ['Janek', 'Tomek', 'Bartek', 'Krzysiek'];
console.log(boys);

const numbers: number[] = [20, 10, 30, 5];
console.log(numbers);
