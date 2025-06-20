/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { logger } from '../../utils/logger';

logger('Type vs. Interface');

type Animal = {
  name: string;
};

type CanRun = {
  run(): void;
};

type Dog = Animal &
  CanRun & {
    breed: string;
  };

const dog: Dog = {
  name: 'Reksio',
  breed: 'Labrador',
  run() {
    console.log('🐕 runs!');
  },
};

// Typów nie mozna rozszerzać za pomocą deklaracja wielokrotna

// Typy złozone: union / tuple

// interface IResponseType = 'success' | 'error';
// interface IPoint = [number, number];

type ResponseType = 'success' | 'error';
const response: ResponseType = 'success';

type Point = [number, number];
const position: Point = [10, 20];
