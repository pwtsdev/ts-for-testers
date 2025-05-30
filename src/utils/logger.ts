import chalk from 'chalk';

/* eslint-disable no-console */
export const logger = (msg: string): void => {
  const styles = [chalk.bgBlue.white];
  //   const styles = [
  //     chalk.bold.bgMagenta.white,
  //     chalk.bold.bgCyan.black,
  //     chalk.bold.bgGreen.white,
  //     chalk.bold.bgYellow.black,
  //     chalk.bold.bgBlue.white,
  //     chalk.bold.bgRed.white,
  //     chalk.inverse,
  //     chalk.underline.green,
  //     chalk.bgBlackBright.yellow,
  //   ];

  const style = styles[Math.floor(Math.random() * styles.length)];

  console.log(`\n` + style(` 👉 ${msg} `));
};

export const showCollection = (collection: unknown): void => {
  let collectionType: string;

  if (collection instanceof Array) {
    collectionType = 'Array';
  } else {
    collectionType = 'Unknown or not a collection';
  }

  console.log(`Collection type: ${collectionType}`);
  console.log(collection);
  console.log('\n');
};
