/* eslint-disable no-console */
export {};

// console.log(0 / 0);

const five = '5';

console.log(five);
console.log(typeof five);

console.log(Number(five));
console.log(parseInt(five));
console.log(typeof Number(five));
console.log(typeof parseInt(five));

// NaN -> typ: number

// Ciekawostka!
// console.log(String === String);
// console.log(Number === Number);
// console.log(Boolean === Boolean);
// console.log(NaN === NaN);

// Porównanie NaN
// console.log(isNaN(NaN));

console.log(Number.isNaN(NaN));
console.log(Number.isNaN('NaN'));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN('abc'));
console.log(Number.isNaN(123));

// Sprawdzenie czy wartość jest liczbą!
// 1. Sprawdzenie typu nie wystarczy bo NaN jest typu number!
console.log(typeof five === 'number');

// 2. Sprawdzamy czy wartość nie jest NaN!
console.log(typeof five === 'number' && !Number.isNaN(five));
