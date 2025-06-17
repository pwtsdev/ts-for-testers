/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/prefer-readonly */
/* eslint-disable no-console */
import { logger } from '../../utils/logger';

class OfficePC {
  static supportedSystems: string[] = ['Windows 10', 'Windows 11', 'Linux', 'macOS'];

  static isSupportedSystem(system: string): boolean {
    return OfficePC.supportedSystems.includes(system);
  }

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

logger('Static fields and methods:');

console.log(OfficePC.supportedSystems);
console.log(OfficePC.isSupportedSystem('Windows 11'));
