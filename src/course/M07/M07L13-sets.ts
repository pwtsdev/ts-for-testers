/* eslint-disable no-console */

import { logger, showCollection } from '../../utils/logger';

logger('Set - unikalne wartości dowolnego typu');

const htmlElements = ['button', 'input', 'checkbox', 'dropdown list', 'header', 'button'];
logger(`Długość tablicy: ${String(htmlElements.length)}`);
showCollection(htmlElements);

const uniqueElements = new Set(htmlElements);
logger(`Długość set: ${String(uniqueElements.size)}`);
showCollection(uniqueElements);

logger('dodawanie elementu do seta');
uniqueElements.add('img');
showCollection(uniqueElements);

logger('usunięcie elementu z seta');
uniqueElements.delete('img');
showCollection(uniqueElements);

logger('sprawdzanie czy set zawiera wartość');
console.log(uniqueElements.has('button'));

logger('liczba elementów');
console.log(uniqueElements.size);

logger('klucze i wartości');
console.log(uniqueElements.keys());
console.log(uniqueElements.values());
console.log(uniqueElements.entries());

logger('pętle');
for (const element of uniqueElements) {
  console.log(element.toUpperCase());
}

uniqueElements.forEach((el) => {
  console.log(el.toUpperCase());
});

// logger('wyczyszczenie seta');
// uniqueElements.clear();
// showCollection(uniqueElements);

logger('przeczytanie pojedynczej wartości:');
console.log([...uniqueElements][0]);

logger('konwersja set na tablicę:');
const arr1 = [...uniqueElements];
const arr2 = Array.from(uniqueElements);

showCollection(arr1);
showCollection(arr2);

logger('konwersja tablicy na set:');
const numbers = [1, 2, 2, 3, 4, 4];
const numbersSet = new Set(numbers);
showCollection(numbersSet);
console.log(numbersSet.entries());
