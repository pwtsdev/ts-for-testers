/* eslint-disable no-console */
import { logger } from '../../utils/logger';

logger('Interface w klasie abstrkcyjnej');

interface Powerable {
  isPoweredOn: boolean;
  turnOn(): string;
  turnOff(): string;
}

abstract class PC implements Powerable {
  static supportedSystems: string[] = ['Windows 10', 'Windows 11', 'Linux', 'macOS'];

  static isSupportedSystem(system: string): boolean {
    return PC.supportedSystems.includes(system);
  }

  public isPoweredOn = false;

  constructor(
    readonly brand: string,
    readonly cpu: string,
    readonly ram: number,
    readonly hdd: number,
    readonly system: string,
  ) {}

  describe(): string {
    return `PC: ${this.brand} with CPU: ${this.cpu}, ${String(this.ram)} 
      GB RAM, hdd ${String(this.hdd)}, system ${this.system}.`;
  }

  abstract turnOn(): string;

  abstract turnOff(): string;
}

class OfficePC extends PC {
  constructor(
    brand: string,
    cpu: string,
    ram: number,
    hdd: number,
    system: string,
    private readonly officeSoftwareInstalled: boolean,
  ) {
    super(brand, cpu, ram, hdd, system);
  }

  getMemory(): number {
    return this.hdd;
  }

  getSystem(): string {
    return this.system;
  }

  getBrand(): string {
    return this.brand;
  }

  override describe(): string {
    return super.describe() + ` Office Software: ${this.officeSoftwareInstalled ? 'Yes' : 'No'}`;
  }

  turnOn(): string {
    this.isPoweredOn = true;
    return `${this.brand} has been powered ON.`;
  }

  turnOff(): string {
    this.isPoweredOn = false;
    return `${this.brand} has been powered OFF.`;
  }
}

logger('OfficePC:');
const officePC = new OfficePC('Dell', 'i5', 16, 512, 'Windows 11', true);
console.log(officePC.describe());
console.log(officePC.isPoweredOn);
console.log(officePC.turnOn());
console.log(officePC.isPoweredOn);
