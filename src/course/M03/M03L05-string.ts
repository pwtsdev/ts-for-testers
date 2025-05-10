/* eslint-disable no-console */
export {};

// Tworzenie stringów
const single = 'single quote';
const double = 'double quote';
const template = `template string`;
const multiline = `This is
a multiline
string!`;

console.log(single);
console.log(double);
console.log(template);
console.log(multiline);

// Łączenie stringów
const firstName = 'Bartek';
const lastName = 'Testowy';

// operator +
console.log('My name is ' + firstName + ' ' + lastName);

// string literals / string templates
console.log(`My name is ${firstName} ${lastName}`);
