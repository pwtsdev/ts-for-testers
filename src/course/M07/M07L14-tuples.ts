/* eslint-disable no-console */

import { logger, showCollection } from '../../utils/logger';

logger('Tuple - to specjalny typ tablicy.');

// Tuple - to specjalny typ tablicy, który pozwala określić:
// ile elementów znajduje się w tablicy,
// jakiego typu jest każdy z tych elementów,
// oraz w jakiej kolejności te typy występują

let httpResponse: [number, string] = [201, 'Created'];
showCollection(httpResponse);

httpResponse = [200, 'Ok'];
showCollection(httpResponse);

// Kiedy używać Tuple?
// Gdy dane mają stałą strukturę z różnymi typami.
// Do zwracania wielu wartości z funkcji:
function getResponse(): [number, string] {
  return [200, 'OK'];
}

console.log(getResponse());

httpResponse.push('END');
showCollection(httpResponse);

httpResponse.forEach((el) => {
  console.log(el);
});
