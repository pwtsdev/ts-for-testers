/* eslint-disable no-console */
import { logger } from '../../utils/logger';

logger('is-a - dziedziczenie');

class OfficePC {
  static supportedSystems: string[] = ['Windows 10', 'Windows 11', 'Linux', 'macOS'];

  static isSupportedSystem(system: string): boolean {
    return OfficePC.supportedSystems.includes(system);
  }

  private readonly brand: string;
  private readonly cpu: string;
  private readonly ram: number;
  private readonly hdd: number;
  private readonly system: string;
  private readonly officeSoftwareInstalled: boolean;

  constructor(brand: string, cpu: string, ram: number, hdd: number, system: string, officeSoftwareInstalled: boolean) {
    this.brand = brand;
    this.cpu = cpu;
    this.ram = ram;
    this.hdd = hdd;
    this.system = system;
    this.officeSoftwareInstalled = officeSoftwareInstalled;
  }

  getMemory(): number {
    return this.hdd;
  }

  getSystem(): string {
    return this.system;
  }

  describe(): string {
    return `OfficePC: ${this.brand} with CPU: ${this.cpu}, ${String(this.ram)} 
    GB RAM, hdd ${String(this.hdd)}, system ${this.system}. Office Software: ${this.officeSoftwareInstalled ? 'Yes' : 'No'}`;
  }
}

class GamingPC {
  static supportedSystems: string[] = ['Windows 10', 'Windows 11', 'Linux', 'macOS'];

  static isSupportedSystem(system: string): boolean {
    return GamingPC.supportedSystems.includes(system);
  }

  private readonly brand: string;
  private readonly cpu: string;
  private readonly ram: number;
  private readonly hdd: number;
  private readonly system: string;
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
    this.brand = brand;
    this.cpu = cpu;
    this.ram = ram;
    this.hdd = hdd;
    this.system = system;
    this.externalGraphic = externalGraphic;
    this.coolingSystem = coolingSystem;
  }

  getMemory(): number {
    return this.hdd;
  }

  getSystem(): string {
    return this.system;
  }

  describe(): string {
    return `GamingPC: ${this.brand} with CPU: ${this.cpu}, ${String(this.ram)} 
      GB RAM, hdd ${String(this.hdd)}, system ${this.system}, GPU: ${this.externalGraphic}, cooling: ${this.coolingSystem}`;
  }
}

logger('OfficePC:');
const officePC = new OfficePC('Dell', 'i5', 16, 512, 'Windows 11', true);
console.log(officePC.describe());

logger('GamingPC:');
const gamingPC = new GamingPC('HP', 'i10', 64, 1024, 'Windows 11', 'GeForce RTX 4070', 'Liquid Cooling');
console.log(gamingPC.describe());
