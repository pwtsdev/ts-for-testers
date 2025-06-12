/* eslint-disable no-console */
import { logger } from '../../utils/logger';

logger('Function vs. method:');

interface User {
  firstName: string;
  lastName: string;
  age: number;
  role: string;
  fullName(): string;
  isAdult(): boolean;
}

const bartek: User = {
  firstName: 'Bartek',
  lastName: 'Testowy',
  age: 35,
  role: 'admin',
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  isAdult() {
    return this.age >= 18 ? true : false;
  },
};

console.log(bartek);
console.log(bartek.firstName + ' ' + bartek.lastName);
console.log(bartek.fullName());
console.log(bartek.isAdult());

logger('Keys:');
console.log(Object.keys(bartek));

logger('Values:');
console.log(Object.values(bartek));

logger('Entries:');
console.log(Object.entries(bartek));

logger('Loop for...in:');
for (const key in bartek) {
  const value = bartek[key as keyof typeof bartek];
  console.log(`${key} - ${String(value)}`);
}
