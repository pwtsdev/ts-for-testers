/* eslint-disable no-console */
import { logger } from '../../utils/logger';

logger('Partial - typ obiektu');
// Typ obiektu, w którym wszystkie pola są opcjonalne

interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: 'Bartek',
  email: 'bartek@example.com',
};

console.log(user);

const updatedUser: Partial<User> = {
  email: 'nowy@email.com',
};

console.log(updatedUser);
