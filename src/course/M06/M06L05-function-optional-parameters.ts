/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable no-console */
export {};

function greet(firstName: string, lastName: string): void {
  console.log(`Hello ${firstName} ${lastName}`);
}

greet('Bartek', 'Testowy');

// Parametry opcjonalne
function greetWithOptionalParameters(firstName: string, lastName?: string): void {
  if (!lastName) {
    lastName = '';
  }

  console.log(`Hello ${firstName} ${lastName}`);
}

greetWithOptionalParameters('Bartek');
greetWithOptionalParameters('Bartek', 'Testowy');

// Parametry z wartością domyślą
function greetWithDefaultParameters(firstName: string, lastName = ''): void {
  console.log(`Hello ${firstName} ${lastName}`);
}

greetWithDefaultParameters('Bartek');
greetWithDefaultParameters('Bartek', 'Testowy2');
