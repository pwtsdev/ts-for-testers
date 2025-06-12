/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable no-console */
import { logger } from '../../utils/logger';

logger('Step 1: Object without any type definition');

const bartek = {
  name: 'Bartek',
  age: 3,
  email: 'bartek@akademiaqa.pl',
  activeStatus: true,
  role: 'admin',
};

console.log(bartek);

logger('Step 2: Object with an inline (anonymous) type');

const bartekInlineType: { name: string; age: number; email: string; activeStatus: boolean; role: string } = {
  name: 'Bartek',
  age: 3,
  email: 'bartek@akademiaqa.pl',
  activeStatus: true,
  role: 'admin',
};

console.log(bartekInlineType);

logger('Step 3: Object using a custom type alias');

type UserType = {
  name: string;
  age: number;
  email: string;
  activeStatus: boolean;
  role: string;
};

const bartekType: UserType = {
  name: 'Bartek',
  age: 3,
  email: 'bartek@akademiaqa.pl',
  activeStatus: true,
  role: 'admin',
};

console.log(bartekType);

logger('Step 4: Object using an interface');

interface UserInterface {
  name: string;
  age: number;
  email: string;
  activeStatus: boolean;
  role: string;
}

const bartekInterface: UserInterface = {
  name: 'Bartek',
  age: 35,
  email: 'bartek@example.com',
  activeStatus: true,
  role: 'admin',
};

console.log(bartekInterface);
