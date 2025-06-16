/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/prefer-readonly */
/* eslint-disable no-console */
import { logger } from '../../utils/logger';

class OfficePC {
  constructor(
    private brand: string,
    private cpu: string,
    private _ram: number,
    private hdd: number,
    private _system: string,
  ) {}

  describe(): string {
    return `OfficePC: ${this.brand} with cpu: ${this.cpu}, ${String(this._ram)} 
    GB RAM, hdd ${String(this.hdd)}, system ${this._system}.`;
  }

  // getter - system
  get system(): string {
    return this._system;
  }

  // setter - system
  set system(value: string) {
    this._system = value;
  }

  // getter - ram
  get ram(): number {
    return this._ram;
  }

  // setter - ram
  set ram(value: number) {
    if (value >= 16 && value <= 512) {
      this._ram = value;
    } else {
      throw new Error('RAM must be between 16 and 512 GB');
    }
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
officePC1.system = 'Linux';
console.log(officePC1.system);

officePC1.ram = 256;
console.log(officePC1.ram);

console.log(officePC1.describe());
