/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable no-console */
export {};

// Logical default values
const isFalse = false;
const isZero = 0;
const isNegativeZero = -0;
const isBigIntZero = 0n;
const isEmptyString = '';
const isNull = null;
const isUndefined = undefined;
const isNan = NaN;

console.log(isFalse);
console.log(isZero);
console.log(isNegativeZero);
console.log(isBigIntZero);
console.log(isEmptyString);
console.log(isNull);
console.log(isUndefined);
console.log(isNan);

// if else - falsy value
if (isFalse) {
  console.log('false is: true:');
} else {
  console.log('false is: false:');
}

if (isZero) {
  console.log('zero is: true');
} else {
  console.log('zero is: false');
}

if (isNegativeZero) {
  console.log('negative zero is: true');
} else {
  console.log('negative zero is: false');
}

if (isBigIntZero) {
  console.log('big int zero is: true');
} else {
  console.log('big int zero is: false');
}

if (isEmptyString) {
  console.log('empty string is: true');
} else {
  console.log('empty string is: false');
}

if (isNull) {
  console.log('null is: true');
} else {
  console.log('null is: false');
}

if (isUndefined) {
  console.log('undefined is: true');
} else {
  console.log('undefined is: false');
}

if (isNan) {
  console.log('NaN is: true');
} else {
  console.log('NaN is: false');
}

// M03L09-boolean.ts
// OR || - zwraca true, jeśli przynajmniej jeden warunek jest prawdziwy.

// Use || to set default value
console.log('Operator ||');
console.log(isFalse || 'String: default value: isFalse');
console.log(isZero || 'String: default value: isZero');
console.log(isNegativeZero || 'String: default value: isNegativeZero');
console.log(isBigIntZero || 'String: default value: isBigIntZero');
console.log(isEmptyString || 'String: default value: isEmptyString');
console.log(isUndefined || 'String: default value: isUndefined');
console.log(isNull || 'String: default value: isNull');
console.log(isNan || 'String: default value: isNan');

// Parametry opcjonalne
function greetWithOptionalParametersOr(firstName: string, lastName?: string): void {
  //   if (!lastName) {
  //     lastName = '';
  //   }

  lastName = lastName || 'Testowy';
  console.log(`Hello ${firstName} ${lastName}`);
}

greetWithOptionalParametersOr('Bartek', '');

// Nullish Coalescing (??) - zwraca wartość po prawej stronie tylko wtedy,
// gdy wartość po lewej stronie jest null lub undefined.

console.log('Operator ??');
console.log(isFalse ?? 'String: default value: isFalse');
console.log(isZero ?? 'String: default value: isZero');
console.log(isNegativeZero ?? 'String: default value: isNegativeZero');
console.log(isBigIntZero ?? 'String: default value: isBigIntZero');
console.log(isEmptyString ?? 'String: default value: isEmptyString');
console.log(isUndefined ?? 'String: default value: isUndefined');
console.log(isNull ?? 'String: default value: isNull');
console.log(isNan ?? 'String: default value: isNan');

// Kiedy używać operatora ?? ?
// Gdy chcesz mieć domyślną wartość tylko wtedy,
// gdy coś nie istnieje (null/undefined),
// a nie gdy np. jest 0, false albo pustym stringiem!!!.

// Parametry opcjonalne
function greetWithOptionalParametersNullish(firstName: string, lastName?: string): void {
  //   if (!lastName) {
  //     lastName = '';
  //   }

  //      (null / undefined)
  //   lastName = lastName ?? 'Testowy';
  lastName ??= 'Testowy';
  console.log(`Hello ${firstName} ${lastName}`);
}

greetWithOptionalParametersNullish('Bartek', '');
