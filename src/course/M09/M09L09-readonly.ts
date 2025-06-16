/* eslint-disable no-console */
import { logger } from '../../utils/logger';

// zakres widoczności:

// public - Oznacza, że pole/metoda jest dostępna wszędzie – zarówno wewnątrz klasy, jak i na zewnątrz
// Nie trzeba go pisać – jest domyślny.

// private - prywatny dostęp tylko w tej klasie
// Oznacza, że pole/metoda może być używana tylko wewnątrz tej klasy.
// Nie można uzyskać dostępu z zewnątrz ani z klas dziedziczących.

// protected – jak private, ale dostępne też w klasach dziedziczących
// Można z niego korzystać wewnątrz tej klasy i w klasach pochodnych (dziedziczących).

// modyfikator mutowalności:

// 🔐 readonly – tylko do odczytu
// Oznacza, że pole można ustawić tylko raz – przy deklaracji lub w konstruktorze.
// Nie można go później zmienić – nawet z wnętrza klasy.

class OfficePC {
  constructor(
    readonly brand: string,
    readonly cpu: string,
    readonly ram: number,
    readonly hdd: number,
    readonly system: string,
  ) {}

  describe(): string {
    return `OfficePC: ${this.brand} with cpu: ${this.cpu}, ${String(this.ram)} 
    GB RAM, hdd ${String(this.hdd)}, system ${this.system}.`;
  }

  getStorageInfo(): number {
    return this.hdd;
  }

  // upgradeRam(extraRam: number): number {
  //   return (this.ram += extraRam);
  // }
}

logger('1st PC:');
const officePC1 = new OfficePC('HP', 'Intel i5', 16, 512, 'Windows 11');
console.log(officePC1.describe());
console.log(officePC1.getStorageInfo());
// officePC1.upgradeRam(32);
// console.log(officePC1.describe());

logger('2nd PC:');
const officePC2 = new OfficePC('HP', 'Intel i9', 32, 512, 'Windows 10');
console.log(officePC2.describe());
