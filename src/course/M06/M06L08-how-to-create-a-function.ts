/* eslint-disable no-console */
export {};

// 1. Funkcja nazwana:
function functionWithName(): void {
  console.log('funkcja nazwana');
}

functionWithName();

// 2. Funkcja anonimowa:
const anonymousFunction = function (): void {
  console.log('anonymous function');
};

anonymousFunction();

// 3. Arrow function / funkcja strzałkowa
const arrowFunction = (): void => {
  console.log('arrow function');
};

arrowFunction();

const add = (a: number, b: number): number => a + b;
console.log(add(10, 20));
