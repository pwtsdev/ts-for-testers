/* eslint-disable prefer-const */
/* eslint-disable no-console */
export {};

// API ->
// bookId = 1001
// authorId = "100";
// orderId = undefined;
// bookCoverId = null;

type ApiId = number | string | undefined | null;

let bookId: ApiId;

bookId = 10;
console.log(typeof bookId);

let authorId: ApiId;

authorId = '10';
console.log(typeof authorId);

let orderId: ApiId;

orderId = undefined;
console.log(typeof orderId);
