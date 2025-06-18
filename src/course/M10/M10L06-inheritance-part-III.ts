/* eslint-disable no-console */
import { logger } from '../../utils/logger';

logger('is-a - dziedziczenie');

abstract class PC {
  static supportedSystems: string[] = ['Windows 10', 'Windows 11', 'Linux', 'macOS'];

  static isSupportedSystem(system: string): boolean {
    return PC.supportedSystems.includes(system);
  }

  protected readonly brand: string;
  protected readonly cpu: string;
  protected readonly ram: number;
  protected readonly hdd: number;
  protected readonly system: string;

  constructor(brand: string, cpu: string, ram: number, hdd: number, system: string) {
    this.brand = brand;
    this.cpu = cpu;
    this.ram = ram;
    this.hdd = hdd;
    this.system = system;
  }

  getMemory(): number {
    return this.hdd;
  }

  getSystem(): string {
    return this.system;
  }

  abstract getBrand(): string;

  describe(): string {
    return `PC: ${this.brand} with CPU: ${this.cpu}, ${String(this.ram)} 
    GB RAM, hdd ${String(this.hdd)}, system ${this.system}.`;
  }
}

class OfficePC extends PC {
  private readonly officeSoftwareInstalled: boolean;

  constructor(brand: string, cpu: string, ram: number, hdd: number, system: string, officeSoftwareInstalled: boolean) {
    super(brand, cpu, ram, hdd, system);
    this.officeSoftwareInstalled = officeSoftwareInstalled;
  }

  getBrand(): string {
    return this.brand;
  }

  describe(): string {
    return super.describe() + ` Office Software: ${this.officeSoftwareInstalled ? 'Yes' : 'No'}`;
  }
}

class GamingPC extends PC {
  private readonly externalGraphic: string;
  private readonly coolingSystem: string;

  constructor(
    brand: string,
    cpu: string,
    ram: number,
    hdd: number,
    system: string,
    externalGraphic: string,
    coolingSystem: string,
  ) {
    super(brand, cpu, ram, hdd, system);
    this.externalGraphic = externalGraphic;
    this.coolingSystem = coolingSystem;
  }

  getBrand(): string {
    return this.brand;
  }

  describe(): string {
    return super.describe() + ` GPU: ${this.externalGraphic}, cooling: ${this.coolingSystem}`;
  }
}

logger('OfficePC:');
const officePC = new OfficePC('Dell', 'i5', 16, 512, 'Windows 11', true);
console.log(officePC.describe());
console.log(officePC.getMemory());
console.log(officePC.getSystem());

logger('GamingPC:');
const gamingPC = new GamingPC('HP', 'i10', 64, 1024, 'Windows 11', 'GeForce RTX 4070', 'Liquid Cooling');
console.log(gamingPC.describe());
console.log(gamingPC.getMemory());
console.log(gamingPC.getSystem());
