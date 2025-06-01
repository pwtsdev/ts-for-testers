/* eslint-disable @typescript-eslint/no-misused-spread */

import { activeStatus, ages, emails, names, roles } from './data';

// 1. Unique names using Set
export function getUniqueNames(): string[] {
  return [...new Set(names)];
}

export function getUniqueNamesSet(): Set<string> {
  return new Set(names);
}

// 2. Count name occurrences using Map
export function countNameOccurrences(): Map<string, number> {
  const nameMap = new Map<string, number>();
  for (const name of names) {
    nameMap.set(name, (nameMap.get(name) ?? 0) + 1);
  }
  return nameMap;
}

// 3. Average age using reduce
export function averageAge(): number {
  const total = ages.reduce((sum, age) => sum + age, 0);
  return total / ages.length;
}

// 4. Active emails only
export function getActiveEmails(): string[] {
  const result: string[] = [];
  for (let i = 0; i < activeStatus.length; i++) {
    if (activeStatus[i]) {
      result.push(emails[i]);
    }
  }
  return result;
}

// 5. Count roles using Map
export function roleSummary(): Map<string, number> {
  const roleMap = new Map<string, number>();
  for (const role of roles) {
    roleMap.set(role, (roleMap.get(role) ?? 0) + 1);
  }
  return roleMap;
}

// 6. Tuple + Enum example
export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
}

export const responses: [HttpStatus, string][] = [
  [HttpStatus.OK, 'Everything is fine'],
  [HttpStatus.CREATED, 'Resource created'],
  [HttpStatus.NO_CONTENT, 'No content to return'],
];

export function getMessageForStatus(code: HttpStatus): string | undefined {
  const found = responses.find(([status]) => status === code);
  return found?.[1];
}

// 7. Split string into letters
export function splitName(name: string): string[] {
  return [...name];
}

// 8. Sort names
export function sortNamesNonMutating(): string[] {
  return [...names].toSorted();
}
