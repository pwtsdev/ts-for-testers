export {};

function throwError(message: string): never {
  throw new Error(message);
}

throwError('This is an error!');
