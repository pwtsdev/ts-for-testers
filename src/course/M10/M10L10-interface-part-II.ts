/* eslint-disable no-console */
import { logger } from '../../utils/logger';

logger('Interface jako kontrakt dla klasy');
// W tym przypadku interface działa jak umowa,
// którą klasa musi spełnić.

// Klasa implementująca interfejs musi dostarczyć
// wszystkie jego pola i metody.

interface Powerable {
  isPoweredOn: boolean;
  turnOn(): string;
  turnOff(): string;
}

class PC implements Powerable {
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

  turnOn(): string {
    this.isPoweredOn = true;
    return `${this.brand} has been powered ON.`;
  }

  turnOff(): string {
    this.isPoweredOn = false;
    return `${this.brand} has been powered OFF.`;
  }
}

const pc = new PC('Dell', 'i5', 128, 512, 'Windows 11');
console.log(pc);
console.log(pc.isPoweredOn);
console.log(pc.turnOn());
console.log(pc.isPoweredOn);
