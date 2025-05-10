/* eslint-disable no-console */
export {};

const a = 30;
const b = 10;
const price = 19.99;

console.log(a);
console.log(price);

// operacje matematyczne
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// operator modulo, dzielenie z resztą
console.log(10 % 3);

const number = 10;
if (number % 2 === 0) {
  console.log('Liczba jest parzysta');
} else {
  console.log('Liczba jest nieparzysta');
}

// maksymalne wartości
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

const big = 900719925474099111122222n;
console.log(big);

// rzutowanie typów
const ten = '10.5';
console.log(parseFloat(ten));
console.log(Number(ten));

const zeroSix = '0six';
console.log(parseInt(zeroSix));
console.log(Number(zeroSix));
