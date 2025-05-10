/* eslint-disable no-console */
export {};

const isTrue = true;
const isFalse = false;

console.log(isTrue);
console.log(isFalse);

// sprawdzenie waruków
// const isAdmin = true;

// if (isAdmin) {
//   console.log('Możesz edytować ogłoszenie!');
// }

// operatory logiczne

// AND && - zwraca true, jeśli oba warunki są prawdziwe.
// Jeśli pierwszy warunek jest false, nie sprawdza drugiego.

// const isLoggedIn = true;
// const hasPermission = true;
// if (isLoggedIn && hasPermission) {
//   console.log('Możesz wejść na stronę!');
// }

// OR || - zwraca true, jeśli przynajmniej jeden warunek jest prawdziwy.
// const isSuperAdmin = false;
// const isModerator = true;

// if (isSuperAdmin || isModerator) {
//   console.log('Masz dostęp do panelu.');
// }

// NOT (!) - neguje wartość (robi true z false i odwrotnie).
// const isVisible = false;

// if (!isVisible) {
//   console.log('Element jest ukryty.');
// }

// Przykład z Playwright
// const isButtonVisible = await page.getByRole('button', { name: 'Submit' }).isVisible();
// const isButtonEnabled = await page.getByRole('button', { name: 'Submit' }).isEnabled();

// if (isButtonVisible && isButtonEnabled) {
//   await page.getByRole('button', { name: 'Submit' }).click();
// }

// Nullish coalescing operator (??)
