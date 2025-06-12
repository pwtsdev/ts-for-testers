/* eslint-disable no-console */
import { logger } from '../../utils/logger';

logger('Object with method:');

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
