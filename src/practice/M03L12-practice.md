# M03L12 – PRACTICE

**LOGIN VALIDATION**

Write a small TypeScript program to practice working with variables, strings, booleans, number conversion, and conditional logic.

- Create three variables:

  - `rawUsername` of type `string` (with extra spaces)
  - `rawPassword` of type `string` (with extra spaces)
  - `rawAge` of type `string` (a number in string format, with spaces)

- Clean up the data using string methods and convert `rawAge` to a number.

- Validate the data:

  - `username` must not be empty
  - `password` must be at least 5 characters long
  - `age` must be a number greater than 18

- Use `console.log()` to print:
  - `"Logged in as [username], age: [age]"` if all checks pass
  - `"Login failed – invalid input"` if any condition fails

## Example

If the inputs are `'  Bartek   '`, `' 12345 '`, and `' 32 '`, the console should output:  
`Logged in as Bartek, age: 32`
