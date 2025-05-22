/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
export {};

function makeASandwich(callback?: () => void): void {
  console.log('Prepare a slice of bread');
  console.log('Spread butter on the bread');
  console.log('Prepare the cheese');
  console.log('Add a slice of tomato');
  console.log('Sprinkle with salt');
  console.log('Sandwich is ready!!!');

  if (callback) {
    callback();
  }
}

function makeATea(): void {
  console.log('Make a tea!');
}

function makeACoffee(): void {
  console.log('Make a coffee!');
}

makeASandwich(makeACoffee);
