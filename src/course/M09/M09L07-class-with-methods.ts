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

  describe(): string {
    return `OfficePC: ${this.brand} with cpu: ${this.cpu}, ${String(this.ram)} 
    GB RAM, hdd ${String(this.hdd)}, system ${this.system}.`;
  }

  getStorageInfo(): number {
    return this.hdd;
  }

  upgradeRam(extraRam: number): number {
    return (this.ram += extraRam);
  }
}

logger('1st PC:');
const officePC1 = new OfficePC('HP', 'Intel i5', 16, 512, 'Windows 11');
console.log(officePC1.describe());
console.log(officePC1.getStorageInfo());
officePC1.upgradeRam(32);
console.log(officePC1.describe());

logger('2nd PC:');
const officePC2 = new OfficePC('HP', 'Intel i9', 32, 512, 'Windows 10');
console.log(officePC2.describe());

console.log(officePC2.ram);
console.log((officePC2.ram = 1000));
console.log(officePC2.describe());
