/* eslint-disable no-console */
import { logger } from '../../utils/logger';

logger('Rozszerzanie interfaców - dziedziczenie');

interface Authenticable {
  username: string;
  password: string;
  login(): void;
  logout(): void;
}

interface AuthenticableAdmin extends Authenticable {
  role: string;
}

class User implements AuthenticableAdmin {
  constructor(
    readonly username: string,
    readonly password: string,
    readonly role: string,
  ) {}

  login(): void {
    //
  }

  logout(): void {
    //
  }
}

const user = new User('bartek', '123456', 'admin');
console.log(user);

logger('Rozszerzanie interfaców - deklaracja wielokrotna');
// declaration merging

interface Animal {
  name: string;
}

interface Animal {
  run(): void;
}

class Dog implements Animal {
  constructor(readonly name: string) {}

  run(): void {
    console.log(`${this.name} can run!`);
  }
}

const dog = new Dog('Fafik');
dog.run();
