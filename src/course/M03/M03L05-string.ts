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

// Zamiana stringów
// wielkie/małe litery
console.log(firstName.toUpperCase());
console.log(lastName.toLocaleLowerCase());

// zamiana znaków/słów
const text = 'TypeScript is super boring!';
console.log(text.replace('boring', 'COOL'));
console.log(text.replaceAll(' ', '_'));

// powtarzanie
const title = 'a';
console.log(title.repeat(129));

// długość stringa
console.log(title.length);

// dopełnienie
console.log(firstName.padStart(firstName.length + 4, 'x'));
console.log(firstName.padEnd(firstName.length + 4, 'x'));

// usuwanie białych znaków
const titleFromWebsite = '  TypeScript is awesome!  ';
console.log(titleFromWebsite);
console.log(titleFromWebsite.trim());
console.log(titleFromWebsite.trimStart());
console.log(titleFromWebsite.trimEnd());
