# M06L11 – PRACTICE

**🧪 Assignment: USER DATA SANITIZATION – FUNCTIONAL VERSION**

In this exercise, you'll practice:

- working with `unknown`, `null`, `undefined`, `NaN`,
- type narrowing using `typeof`,
- creating reusable functions,
- using optional parameters and the `??` operator,
- organizing code using `import`/`export`.

---

## 🔧 Part 1 – Parse Input Data

1. Create a new file called `userDataParser.ts`.
2. Implement and export the following functions:

```ts
export function parseName(rawName?: unknown): string;
export function parseAge(rawAge: unknown): number | null;
export function parseScore(rawScore: unknown): number;
export function parseEmail(rawEmail: unknown): string;
```

Each function should:

- Accept input that might be `undefined`, the wrong type, or contain invalid values.
- Use `typeof` to safely narrow types.
- Use the `??` operator to provide fallback values when appropriate.

---

## 🔍 Function Requirements

- `parseName`:

  - If `rawName` is `null` or `undefined` return `"Anonymous"` (Hint: use ?? operator).
  - If `rawName` is a string, return the trimmed version.
  - If not, return `"Anonymous"`.

- `parseAge`:

  - If `rawAge` is a string or number and can be converted to a valid number, return it.
  - If it's `NaN` or an invalid type, return `null`.

- `parseScore`:

  - If the input is a number and not `NaN`, return it.
  - If it’s a string that can be converted to a valid number, return the converted value.
  - Otherwise, return `0`.

- `parseEmail`:
  - If `rawEmail` is `undefined`, return `"no-email@example.com"`.
  - Otherwise, return it as a string.

---

## ⚙️ Part 2 – Use the Parsed Data

1. In a separate file (e.g., `M06L12-solution.ts`), import the functions from `userDataParser.ts`.

2. Create a function:

```ts
function handleUserInput(
  rawName: unknown,
  rawAge: unknown,
  rawScore: unknown,
  rawEmail: unknown,
  callback?: (name: string, age: number | null, score: number, email: string) => void,
): void;
```

This function should:

- Use the parsing functions to convert raw values into sanitized values.
- Pass the final sanitized values to a callback, if provided.

4. Create a `printUserInfo(name: string, age: number | null, score: number, email: string)` function that logs the following:

```
Name: Bartek (type: string)
Age: 27 (type: number)
Score: 0 (type: number)
Email: no-email@example.com (type: string)
```

Each line should use `typeof` to print the value and its type.

---

## 🧪 Example Inputs:

```ts
const rawName: any = '   Bartek   ';
const rawAge: unknown = '27';
const rawScore: string | number = 'NaN';
const rawEmail: string | undefined = undefined;
```

---

## ✅ Expected Output:

```
Name: Bartek (type: string)
Age: 27 (type: number)
Score: 0 (type: number)
Email: no-email@example.com (type: string)
```
