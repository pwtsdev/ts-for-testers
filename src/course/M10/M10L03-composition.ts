/* eslint-disable no-console */

// REKLACJA has-a - kompozycja
// w relacji has-a, obiekt zawiera inny obiekt jako część swojej struktury

class OperatingSystem {
  constructor(public readonly name: string) {}
}

class OfficePC {
  constructor(
    private readonly brand: string,
    private readonly cpu: string,
    private readonly ram: number,
    private readonly hdd: number,
    private readonly system: OperatingSystem,
  ) {}

  getSystem(): string {
    return this.system.name;
  }

  describe(): string {
    return `OfficePC: ${this.brand} with CPU: ${this.cpu}, ${String(this.ram)} GB RAM, 
    ${String(this.hdd)} GB HDD, system: ${this.system.name}`;
  }
}

const windows10 = new OperatingSystem('Windows 10');

const officePC = new OfficePC('Dell', 'i5', 16, 512, windows10);
console.log(officePC.getSystem());
console.log(officePC.describe());
