/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable no-console */
// Interface
export interface Licensable {
  licenseKey: string;
  expirationDate: Date;
  isLicenseValid(): boolean;
}

// Software class implementing the interface
export class Software implements Licensable {
  constructor(
    public readonly name: string,
    private readonly _licenseKey: string,
    private readonly _expirationDate: Date,
  ) {}

  get licenseKey(): string {
    return this._licenseKey;
  }

  get expirationDate(): Date {
    return this._expirationDate;
  }

  isLicenseValid(): boolean {
    return new Date() < this._expirationDate;
  }
}

// Abstract Computer class
export abstract class Computer {
  private readonly software: Software[] = [];

  constructor(
    protected brand: string,
    protected cpu: string,
    protected ram: number,
    protected system: string,
  ) {}

  installSoftware(software: Software): void {
    this.software.push(software);
  }

  listSoftware(): string[] {
    return this.software.map((s) => s.name);
  }

  abstract describe(): string;
}

// OfficePC class
export class OfficePC extends Computer {
  constructor(
    brand: string,
    cpu: string,
    ram: number,
    system: string,
    readonly officeSuiteInstalled: boolean,
  ) {
    super(brand, cpu, ram, system);
  }

  describe(): string {
    return `${this.brand} Office PC with ${this.cpu}, ${String(this.ram)}GB RAM, ${this.system}, Office suite: ${String(this.officeSuiteInstalled)}`;
  }
}

// DeveloperPC class
export class DeveloperPC extends Computer {
  constructor(
    brand: string,
    cpu: string,
    ram: number,
    system: string,
    readonly devToolsInstalled: boolean,
  ) {
    super(brand, cpu, ram, system);
  }

  describe(): string {
    return `${this.brand} Developer PC with ${this.cpu}, ${String(this.ram)}GB RAM, ${this.system}, Dev tools: ${String(this.devToolsInstalled)}`;
  }
}

// ComputerFactory
export class ComputerFactory {
  static createdComputersCount = 0;

  private constructor() {
    throw new Error('Can not create an object from this class!');
  }

  static createOfficePC(
    brand: string,
    cpu: string,
    ram: number,
    system: string,
    officeSuiteInstalled: boolean,
  ): OfficePC {
    this.createdComputersCount++;
    return new OfficePC(brand, cpu, ram, system, officeSuiteInstalled);
  }

  static createDeveloperPC(
    brand: string,
    cpu: string,
    ram: number,
    system: string,
    devToolsInstalled: boolean,
  ): DeveloperPC {
    this.createdComputersCount++;
    return new DeveloperPC(brand, cpu, ram, system, devToolsInstalled);
  }
}

// Example usage
const pc = ComputerFactory.createOfficePC('HP', 'Intel i5', 16, 'Windows 11', true);
pc.installSoftware(new Software('MS Office', 'XYZ123', new Date('2026-01-01')));
pc.installSoftware(new Software('Canva', 'CAN123', new Date('2026-01-01')));
pc.installSoftware(new Software('Postman', 'POS123', new Date('2026-01-01')));
console.log(pc.describe());
console.log(pc.listSoftware());

const devPC = ComputerFactory.createDeveloperPC('Mac', 'Intel i5', 64, 'Mac OS', true);
devPC.installSoftware(new Software('Canva', 'CAN123', new Date('2026-01-01')));
devPC.installSoftware(new Software('Postman', 'POS123', new Date('2026-01-01')));
console.log(devPC.describe());
console.log(devPC.listSoftware());

console.log('Created PCs:', ComputerFactory.createdComputersCount);
