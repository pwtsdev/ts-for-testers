/* eslint-disable no-console */
export {};

// Parametry – podczas definicji funkcji:
function addTwoNumbers(a: number, b: number): void {
  console.log(a + b);
}

// Argumenty – podczas wywołania funkcji:
addTwoNumbers(100, 20);
addTwoNumbers(-10, 10);
addTwoNumbers(500, 500);

function addNumbers(a: number, b: number): number {
  const sum = a + b;
  return sum;
}

const sum = addNumbers(100, 100);
console.log(sum);

function sayHelloName(name: string): string {
  return `Hello from function: ${name}`;
}

const hello = sayHelloName('bartek');
console.log(hello);
