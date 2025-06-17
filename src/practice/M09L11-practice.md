# M09L11 – PRACTICE

**🧪 Assignment: CLASS CHALLENGE – BUG TRACKER**

In this exercise, you will practice:

- defining a class with fields and a constructor
- using access modifiers: `public`, `private`
- using `readonly` fields
- implementing class methods
- using getters and setters with validation logic

---

## 🐞 Class: `BugReport`

Create a class `BugReport` to represent a reported bug in a system.

### Fields

| Field         | Type                                  | Modifiers                   | Description                           |
| ------------- | ------------------------------------- | --------------------------- | ------------------------------------- |
| `id`          | `number`                              | `public readonly`           | unique report number                  |
| `title`       | `string`                              | `private`                   | short bug title                       |
| `description` | `string`                              | `private`                   | full bug description                  |
| `status`      | `'open' \| 'in progress' \| 'closed'` | `private` + getter / setter | current report status                 |
| `createdAt`   | `Date`                                | `public readonly`           | timestamp when the report was created |

---

## 🧱 Constructor

The constructor must accept `id`, `title`, and `description` and set:

- `status` to `'open'` by default
- `createdAt` to the current date (`new Date()`)

---

## 📝 Getter & Setter: `status`

- **Getter**: returns the current status.
- **Setter**:
  - accepts only `'open'`, `'in progress'`, or `'closed'`
  - throws an error for any other value

---

## ✏️ Method: `summarize()`

Returns a short summary string of the bug report, e.g.:

```text
#123 – [open] User cannot log in
```

---

## 🧪 Example usage

```ts
const bug = new BugReport(123, 'User cannot log in', 'Login form returns a 500 error');

console.log(bug.summarize());
// #123 – [open] User cannot log in

bug.status = 'in progress';
console.log(bug.status);
// in progress

bug.status = 'resolved';
// ❌ Error: Invalid status
```

---

## 🚫 Invalid usage

```ts
bug.id = 999; // ❌ Error – readonly
bug.status = 'deleted'; // ❌ Error – invalid value
bug.title = 'Oops'; // ❌ Error – private field
```

---

## 📁 Additional requirements

- Apply proper access modifiers (`private`, `public`, `readonly`)
- Ensure the getter and setter for `status` are adjacent
- `summarize()` must be an instance method

---

## 🚀 Bonus (optional)

Create a class `BugTracker` that stores multiple `BugReport` instances and supports:

- `addReport(report: BugReport)`
- `getOpenReports(): BugReport[]`
- `closeReportById(id: number): void`
