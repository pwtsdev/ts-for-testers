/* eslint-disable no-console */
import { logger } from '../../utils/logger';

logger('Pętle do while i while');
// const numbers = [10, 20, 30, 40, 50];
const numbers = [];

logger('while – warunek sprawdzany przed pierwszym wykonaniem:');

let counter = 0;
while (counter < numbers.length) {
  console.log('Jestem w pętli while!');
  counter++;
}

logger('do...while – kod wykona się minimum raz:');
let counter2 = 0;

do {
  console.log('Jestem w pętli do...while!');
  counter2++;
} while (counter2 < numbers.length);
