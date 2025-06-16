/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable no-console */
import { logger } from '../../utils/logger';

class OfficePC {
  brand: string;
  cpu: string;
  ram: number;
  hdd: number;
  system: string;

  constructor(brand: string, cpu: string, ram: number, hdd: number, system: string) {
    this.brand = brand;
    this.cpu = cpu;
    this.ram = ram;
    this.hdd = hdd;
    this.system = system;
  }
}

logger('First class:');

const officePC1 = new OfficePC('HP', 'Intel i5', 16, 512, 'Windows 11');
console.log(officePC1);

const officePC2 = new OfficePC('HP', 'Intel i9', 32, 512, 'Windows 10');
console.log(officePC2);
