/* eslint-disable no-console */
import { logger } from '../../utils/logger';

logger('Generics function with constrains:');

function addId<T extends object>(id: number, obj: T): T & { id: number } {
  return { ...obj, id };
}

const obj1 = addId(10, { name: 'Bartek', email: 'bartek@pwts.dev' });
console.log(obj1);
