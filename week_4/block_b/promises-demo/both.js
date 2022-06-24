const fs = require('fs');
const fsPromises = fs.promises;

function copyWithPromise(src, dest) {
  return fsPromises
    .readFile(src)
    .then((contents) => fsPromises.writeFile(dest, contents));
}

async function copyWithAsync(src, dest) {
  const contents = await fsPromises.readFile(src);
  await fsPromises.writeFile(dest, contents);
}

copyWithAsync('./test.txt', './test-copy-2.txt').then(() =>
  console.log('All done!')
);

// const writeFile = (contents) => fsPromises.writeFile('./test-copy.txt', contents);

// readFile('./test.txt')
//   .then(writeFile)
//   .then(copyFile)
//   .then(readFile)
//   .then(uppercaseContents)
//   .then(writeCapitalsFile)
