# M07L16 – PRACTICE

**🧪 Assignment: COLLECTION CHALLENGE – DATA ANALYSIS**

In this exercise, you will practice:

- working with arrays, sets, maps, tuples, and enums,
- using methods like `map`, `filter`, `reduce`, `includes`, `some`, `every`, `sort`, `slice`, `join`,
- iterating with different loops (`for`, `for...of`, `forEach`, `while`, `do...while`).

---

## 📦 Input Data – `data.ts`

Start by creating a file called `data.ts` with the following exported data:

```ts
export const names = ['Bartek', 'Kasia', 'Tomek', 'Kasia', 'Marek', 'Bartek'];

export const ages = [35, 29, 41, 27, 33, 35];

export const emails = [
  'bartek@example.com',
  'kasia@example.com',
  'tomek@example.com',
  'kasia@example.com',
  'marek@example.com',
  'bartek@example.com',
];

export const activeStatus = [true, false, true, false, true, true];

export const roles = ['admin', 'tester', 'tester', 'developer', 'tester', 'admin'];
```

---

## ✅ Tasks:

### 1. `getUniqueNames()`

Return unique names using a `Set`.

### 2. `countNameOccurrences()`

Return a `Map<string, number>` that counts how many times each name appears.

### 3. `averageAge()`

Calculate the average of all values in the `ages` array.

### 4. `getActiveEmails()`

Return only the emails corresponding to `true` values in the `activeStatus` array.

### 5. `roleSummary()`

Count how many times each role appears using a `Map<string, number>`.

### 6. Tuple + Enum

Create an enum:

```ts
enum HttpStatus {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
}
```

Create tuples `[HttpStatus, string][]`:

```ts
const responses = [
  [HttpStatus.OK, 'Everything is fine'],
  [HttpStatus.CREATED, 'Resource created'],
  [HttpStatus.NO_CONTENT, 'No content to return'],
];
```

Write a function that returns the message for a given status code.

---

### 7. Split a string into letters

Take the name `"Bartek"` and split it into letters using `split` or spread operator.

---

### 8. Sort names alphabetically

Show the difference between:

```ts
// mutates the original array
// non-mutating version
```

---

## ✅ Example Outputs

```
Unique names: ['Bartek', 'Kasia', 'Tomek', 'Marek']

Name counts:
Map {
  'Bartek' => 2,
  'Kasia' => 2,
  'Tomek' => 1,
  'Marek' => 1
}

Average age: 33.33

Active emails:
['bartek@example.com', 'tomek@example.com', 'marek@example.com', 'bartek@example.com']

Roles:
Map {
  'admin' => 2,
  'tester' => 3,
  'developer' => 1
}

Status 204: No content to return

Letters: ['B', 'a', 'r', 't', 'e', 'k']

Sorted names: ['Bartek', 'Bartek', 'Kasia', 'Kasia', 'Marek', 'Tomek']
```
