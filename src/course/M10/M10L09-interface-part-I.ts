/* eslint-disable no-console */
import { logger } from '../../utils/logger';

logger('Interface jako typ (kształt) obiektu');
// Opisuje strukturę zwykłego obiektu.
// Jakie ma mieć pola, ich typy i ewentualnie metody.

interface User {
  firstName: string;
  lastName: string;
  email: string;
  age?: number;
  fullName(): string;
}

const user: User = {
  firstName: 'Bartek',
  lastName: 'Testowy',
  email: 'bartek@pwts.dev',
  fullName(): string {
    return ` ${this.firstName} ${this.lastName}`;
  },
};

console.log(user);
console.log(user.fullName());
