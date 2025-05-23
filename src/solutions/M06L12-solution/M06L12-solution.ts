/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { parseAge, parseEmail, parseName, parseScore } from './userDataParser';

// Dane wejściowe z nieznanego źródła
const rawName: any = '   Bartek   ';
const rawAge: unknown = '27';
const rawScore: string | number = 'NaN';
const rawEmail: string | undefined = undefined;

function printUserInfo(name: string, age: number | null, score: number, email: string): void {
  console.log(`Name: ${name} (type: ${typeof name})`);
  console.log(`Age: ${String(age)} (type: ${typeof age})`);
  console.log(`Score: ${String(score)} (type: ${typeof score})`);
  console.log(`Email: ${String(email)} (type: ${typeof email})`);
}

function handleUserInput(
  rawName: unknown,
  rawAge: unknown,
  rawScore: unknown,
  rawEmail: unknown,
  callback?: (name: string, age: number | null, score: number, email: string) => void,
): void {
  const name = parseName(rawName);
  const age = parseAge(rawAge);
  const score = parseScore(rawScore);
  const email = parseEmail(rawEmail);
  console.log(`User data loaded: ${name} - ${String(age)} - ${String(score)} - ${email}`);

  if (callback) {
    callback(name, age, score, email);
  }
}

handleUserInput(rawName, rawAge, rawScore, rawEmail, printUserInfo);
