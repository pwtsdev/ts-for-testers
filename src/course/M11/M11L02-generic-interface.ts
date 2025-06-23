/* eslint-disable no-console */
import { logger } from '../../utils/logger';

logger('Generic interface:');

interface Resource<T> {
  uuid: number;
  resourceName: string;
  data: T;
}

const obj1: Resource<object> = {
  uuid: 1,
  resourceName: 'person',
  data: { name: 'Janek' },
};
console.log(obj1);

const obj2: Resource<string> = {
  uuid: 2,
  resourceName: 'person',
  data: 'Janek',
};
console.log(obj2);

const obj3: Resource<string[]> = {
  uuid: 3,
  resourceName: 'person',
  data: ['Janek', 'Bartek', 'Tomek'],
};
console.log(obj3);
