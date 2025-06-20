# M10L16 – PRACTICE

**🧪 Assignment: CLASS & INTERFACE CHALLENGE – SOFTWARE LICENSE MANAGER**

In this exercise, you will practice:

- defining and using classes and interfaces
- working with inheritance and composition
- using `private`, `protected`, `readonly` modifiers
- implementing getters and setters
- using static fields and methods
- enforcing license rules via an interface

---

## 💾 Interface: `Licensable`

Create an interface `Licensable` to represent licensed software.

### Properties & Method

| Name               | Type            | Description                              |
| ------------------ | --------------- | ---------------------------------------- |
| `licenseKey`       | `string`        | unique license key                       |
| `expirationDate`   | `Date`          | license expiration date                  |
| `isLicenseValid()` | `() => boolean` | returns `true` if license is still valid |

📌 **Note**: Even though interfaces require public fields, you can fulfill the contract using `private` fields and public **getters**.

---

## 🧱 Class: `Software`

Implements `Licensable` interface. Must include:

- `name` field (`public readonly`)
- `licenseKey` and `expirationDate` as `private readonly` fields
- public **getter methods** (`get licenseKey()` and `get expirationDate()`) to expose them
- `isLicenseValid()` method that returns `true` if current date is before `expirationDate`

---

## 💻 Abstract Class: `Computer`

Create an abstract class `Computer` to represent a computer in the company.

### Fields

| Field      | Type         | Modifiers          | Description             |
| ---------- | ------------ | ------------------ | ----------------------- |
| `brand`    | `string`     | `protected`        | brand of the computer   |
| `cpu`      | `string`     | `protected`        | CPU used                |
| `ram`      | `number`     | `protected`        | RAM size in GB          |
| `system`   | `string`     | `protected`        | operating system        |
| `software` | `Software[]` | `private readonly` | installed software list |

### Requirements

- constructor sets all fields (`software` should start as an empty array)
- method `installSoftware(software: Software): void`
- method `listSoftware(): string[]` – returns software names
- abstract method `describe(): string`

---

## 🖥️ Subclass: `OfficePC`

Extends `Computer`, adds field `officeSuiteInstalled: boolean`, implements `describe()` method.

---

## 🧑‍💻 Subclass: `DeveloperPC`

Extends `Computer`, adds field `devToolsInstalled: boolean`, implements `describe()` method.

---

## 🏭 Class: `ComputerFactory`

- private constructor (Singleton-style prevention)
- static field `createdComputersCount: number`
- static methods:
  - `createOfficePC(...)` – returns new `OfficePC`
  - `createDeveloperPC(...)` – returns new `DeveloperPC`
  - each method increments the `createdComputersCount`

---

## 🧪 Example usage

```ts
const pc = ComputerFactory.createOfficePC('HP', 'Intel i5', 16, 'Windows 11', true);

pc.installSoftware(new Software('MS Office', 'XYZ123', new Date('2026-01-01')));
console.log(pc.listSoftware()); // ['MS Office']
console.log(pc.describe());

console.log(ComputerFactory.createdComputersCount); // 1
```

---

## 🚫 Invalid usage

```ts
const pc = new Computer(...); // ❌ Error – abstract class
pc.software.push(...);        // ❌ Error – private field
```

---

## 🚀 Bonus (optional)

- Add a method `getValidLicenses()` to return only software with valid licenses
- Use `get` accessors for `ram` and `system` with validation logic inside `set`
