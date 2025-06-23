/* eslint-disable no-console */
import { logger } from '../../utils/logger';

logger('Generic class:');

class StorageBox<T> {
  readonly items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const stringBox = new StorageBox<string>();
stringBox.add('first');
stringBox.add('2nd');
stringBox.add('3rd');
console.log(stringBox.getAll());

const numberBox = new StorageBox<number>();
numberBox.add(1);
numberBox.add(2);
numberBox.add(3);
console.log(numberBox.getAll());
