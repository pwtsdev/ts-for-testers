/* eslint-disable no-console */
import { logger } from '../../utils/logger';

logger('Generics function:');

// function getFirstStringElement(arr: string[]): string {
//   return arr[0];
// }

// console.log(getFirstStringElement(['B', 'A', 'R', 'T', 'E', 'K']));

// function getFirstNumberElement(arr: number[]): number {
//   return arr[0];
// }

// console.log(getFirstNumberElement([1, 2, 3, 4, 5]));

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElement<string>(['B', 'A', 'R', 'T', 'E', 'K']));
console.log(getFirstElement<number>([1, 2, 3, 4, 5]));
console.log(getFirstElement<object>([{ name: 'Bartek' }, { name: 'Tomek' }]));
