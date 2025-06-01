/* eslint-disable no-console */
import { logger, showCollection } from '../../utils/logger';

// Map to wbudowany typ kolekcji - który przechowuje pary klucz-wartość.
// Klucze muszą być unikalne!!!

logger('Tworzenie Mapy:');
const crypto = new Map<string, number>();
showCollection(crypto);

logger('Dodawanie elementów do mapy:');
crypto.set('BTC', 10000);
crypto.set('ETH', 2000);
crypto.set('SOL', 1000);
showCollection(crypto);

logger('Ustawianie elementów mapy:');
console.log(crypto.set('SOL', 1800));
showCollection(crypto);

logger('Sprawdzenie czy mapa zawiera element:');
console.log(crypto.has('BTC'));

logger('Rozmiar mapy:');
console.log(crypto.size);

logger('Czytanie elementów z mapy:');
console.log(crypto.get('BTC'));
console.log(crypto.keys());
console.log(crypto.values());
console.log(crypto.entries());

logger('Przejście po wszystkich elementach mapy:');
for (const [key, value] of crypto) {
  console.log(`${key} - ${String(value)}`);
}

crypto.forEach((value, key) => {
  console.log(`${key} - ${String(value)}`);
});

logger('Usunięcie elementu z mapy:');
crypto.delete('SOL');
showCollection(crypto);

// logger('Usunięcie wszystkich elementów z mapy:');
// crypto.clear();
// showCollection(crypto);

logger('Konwersja mapy na tablicę:');
const arrayFromMap = Array.from(crypto);
showCollection(arrayFromMap);

const cryptoArray = [...crypto];
showCollection(cryptoArray);

logger('Konwersja tablicy na mapę:');
const cryptoMap = new Map(cryptoArray);
showCollection(cryptoMap);

const names: [string, number][] = [
  ['Bartek', 10],
  ['Tomek', 11],
];
const namesMap = new Map(names);
showCollection(namesMap);

logger('Inne zastosowania mapy:');
const httpStatus = new Map<number, string>();
httpStatus.set(200, 'OK');
httpStatus.set(201, 'CREATED');
httpStatus.set(204, 'NO CONTENT');

const responseCode = 204;
console.log(httpStatus.get(responseCode));
