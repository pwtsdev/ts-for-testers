/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable no-console */
export {};

let isRaining = true;

if (isRaining) {
  console.log('I need to take an umbrella!');
} else {
  console.log('I need to take sun glasses!');
}

// warunek ternarny ? : - skrócony zapis
// jako zamiennik if / else
// console.log(warunek ? prawda : fałsz);

const weatherForecast = isRaining ? 'I need to take an umbrella!' : 'I need to take sun glasses!';
console.log(weatherForecast);

const ENV = 'PROD';
console.log(ENV === 'PROD' ? 'Odpalam testy na prodzie!' : 'Odpalam testy na QA!');

let statusCode = '500';

if (statusCode.startsWith('2')) {
  console.log('Status code: 2xx');
} else if (statusCode.startsWith('4')) {
  console.log('Status code 4xx');
} else {
  console.log('Unknown status code');
}

// if (prawda) {
//     wykonaj kod jeśli prawda
// }

// if (prawda) {
//     wykonaj kod jeśli prawda
// } else {
//     wykonaj kod jeśli fałsz
// }

// if (prawda) {
//     wykonaj kod jeśli prawda
// } else if (inny warukek prawda) {
//     wykonaj kod jeśli inny warunek
// } else {
//     wykonaj kod w pozostałych przypadkach
// }
