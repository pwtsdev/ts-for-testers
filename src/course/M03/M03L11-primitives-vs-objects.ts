/* eslint-disable no-console */
export {};

// primitives
const number = 10;
const name = 'Bartek';
const isActive = false;

console.log(number);
console.log(name.toUpperCase());
console.log(isActive);

console.log(typeof number);
console.log(typeof name);
console.log(typeof isActive);

// if (isActive) {
//   console.log('Primitive: this is active!');
// }

// object wrappers
const newNumber = new Number(10);
const newName = new String('Bartek');
const newIsActive = new Boolean(false);

console.log(newNumber);
console.log(newName);
console.log(newIsActive);

console.log(newNumber.valueOf());
console.log(newName.valueOf());
console.log(newIsActive.valueOf());

console.log(typeof newNumber);
console.log(typeof newName);
console.log(typeof newIsActive);

if (newIsActive.valueOf()) {
  console.log('Object wrapper: this is active!');
}

// rzutowanie typów - string
console.log('rzutowanie typów - string');
const numberToString = 123;
const booleanTrueToString = true;
const booleanFalseToString = false;

console.log(String(numberToString));
console.log(String(booleanFalseToString));
console.log(String(booleanTrueToString));

console.log(numberToString.toString());
console.log(booleanFalseToString.toString());
console.log(booleanTrueToString.toString());

// null / undefined
// const nullToString = null;
// const undefinedToString = undefined;

// console.log(String(nullToString));
// console.log(String(undefinedToString));
// console.log(nullToString.toString());
// console.log(undefinedToString.toString());

// rzutowanie typów - number
console.log('rzutowanie typów - number');
console.log(Number('42'));
console.log(Number(''));
console.log(Number('abc'));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));

// rzutowanie typów - boolean
console.log('rzutowanie typów - boolean');
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(''));
console.log(Boolean('0'));
console.log(Boolean('abc'));
console.log(Boolean(null));
console.log(Boolean(undefined));
