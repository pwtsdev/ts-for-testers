/* eslint-disable no-console */
export {};

const rawUsername = '  Bartek   ';
const rawPassword = ' 12345 ';
const rawAge = ' 32 ';

const username = rawUsername.trim();
const password = rawPassword.trim();
const age = Number(rawAge.trim());

let isValid = true;

if (username.length < 1) {
  isValid = false;
}

if (password.length < 5) {
  isValid = false;
}

if (age < 18) {
  isValid = false;
}

if (isValid) {
  console.log(`Logged in as ${username}, age: ${String(age)}`);
} else {
  console.log('Login failed – invalid input');
}
