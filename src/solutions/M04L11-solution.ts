/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
export {};

// Dane wejściowe z nieznanego źródła
const rawAge: unknown = '27';
const rawName: any = '   Bartek   ';
const rawScore: string | number = 'NaN';
const rawEmail: string | undefined = undefined;

// Przetwarzanie name (jeśli to string)
let name: string;
if (typeof rawName === 'string') {
  name = rawName.trim();
} else {
  name = 'Anonymous';
}

// Przetwarzanie age (jeśli da się przekonwertować na liczbę)
let age: number | null;
if (typeof rawAge === 'string' || typeof rawAge === 'number') {
  const parsedAge = Number(rawAge);
  age = isNaN(parsedAge) ? null : parsedAge;
} else {
  age = null;
}

// Przetwarzanie score
let score: number;
if (typeof rawScore === 'number') {
  score = isNaN(rawScore) ? 0 : rawScore;
} else if (typeof rawScore === 'string') {
  const parsedScore = Number(rawScore);
  score = isNaN(parsedScore) ? 0 : parsedScore;
} else {
  score = 0;
}

// Przetwarzanie emaila
let email: string;
if (typeof rawEmail === 'undefined') {
  email = 'no-email@example.com';
} else {
  email = rawEmail;
}

// Wyświetlenie przetworzonych danych i ich typów
console.log(`Name: ${name} (type: ${typeof name})`);
console.log(`Age: ${String(age)} (type: ${typeof age})`);
console.log(`Score: ${String(score)} (type: ${typeof score})`);
console.log(`Email: ${String(email)} (type: ${typeof email})`);
