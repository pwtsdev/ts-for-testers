/* eslint-disable no-console */
import { logger, showCollection } from '../../utils/logger';

logger('Tworzenie listy z elementami:');
//                     [   0,       1,        2,         3    ];
const boys: string[] = ['Janek', 'Tomek', 'Bartek', 'Krzysiek'];
showCollection(boys);

logger('PĘTLE:');

logger('Pętla z licznikiem: for');

// 👣 1. let i = 0
// 🔹 Mówimy: "Zacznij liczyć od zera.

// 🔹 Sprawdzamy: "Czy i jest mniejsze niż 4?"
// – Jeśli tak, to robimy to, co jest w środku { ... }.
// – Jeśli nie, to kończymy.

// 🔁 3. i++
// 🔹 Po każdym kroku mówimy: "Dodaj 1 do i (czyli licz dalej)."

for (let i = 0; i < boys.length; i++) {
  if (i === 2) {
    console.log(`Licznik: ${String(i)}, wartość: ${boys[i].toUpperCase()}`);
  } else {
    console.log(`Licznik: ${String(i)}, wartość: ${boys[i]}`);
  }
}

logger('Pętla: for...of');
for (const boy of boys) {
  console.log(`Wartość: ${boy}`);
}

logger('Metoda tablicowa: forEach()');

logger('forEach() - tylko element');
boys.forEach((boy) => {
  console.log(boy.toUpperCase());
});

logger('forEach() - element + licznik');
boys.forEach((boy, i) => {
  console.log(`Licznik: ${String(i)}, wartość: ${boy}`);
});

logger('forEach() - element + licznik + tablica');
boys.forEach((boy, index, array) => {
  console.log(`Element: ${boy}`);
  console.log(`Indeks: ${String(index)}`);
  console.log(`Cała tablica: [${array.join(', ')}]`);
  console.log('---');
});
