# M04L10 – PRACTICE

**USER DATA SANITIZATION**

Write a small TypeScript program to practice working with union types, `NaN`, `null`, `undefined`, `any`, `unknown`, and type narrowing using `typeof`.

- Create the following variables:

  - `rawAge` of type `unknown` – a number in string format (e.g., `"27"`)
  - `rawName` of type `any` – a string with extra spaces (e.g., `"   Bartek   "`)
  - `rawScore` of type `string | number` – a number or the string `"NaN"`
  - `rawEmail` of type `string | undefined` – may be `undefined`

- Process and validate the data:

  - If `rawName` is a string, trim it and store it as `name`. Otherwise, set `name = "Anonymous"`.
  - If `rawAge` can be converted to a number, store it as `age`. If not, set `age = null`.
  - If `rawScore` is `"NaN"` or not a valid number, set `score = 0`. Otherwise, convert and store it as a number.
  - If `rawEmail` is `undefined`, set `email = "no-email@example.com"`.

- Use `typeof` to detect and log the type of each processed value.

- Use `console.log()` to print the final values and their types.

## Example

Given the following inputs:

```ts
let rawAge: unknown = '27';
let rawName: any = '   Bartek   ';
let rawScore: string | number = 'NaN';
let rawEmail: string | undefined = undefined;
```

The program should output:

```
Name: Bartek (type: string)
Age: 27 (type: number)
Score: 0 (type: number)
Email: no-email@example.com (type: string)
```

### ✍️ Extra task:

- Explain the difference between `any` and `unknown`. Why is `unknown` considered safer?
- Why is `NaN` a special value of the `number` type?
- When is it useful to use union types?
