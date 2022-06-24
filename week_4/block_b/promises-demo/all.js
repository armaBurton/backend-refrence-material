const fs = require('fs');
const fsPromises = fs.promises;

async function main(files) {
  // for (let i = 0; i < files.length; i++) {
  //   const filename = files[i];
  //   const contents = await fsPromises.readFile(filename, 'utf8');
  //   console.log(contents);
  // }

  const promises = files.map((file) => fsPromises.readFile(file, 'utf8'));

  console.log('promises', promises);

  // Promise.all to run an array of promises at the same time,
  // canceling out if any promise rejects

  // Promise.allSettles to run an array of promises at the same time,
  // fulfilling all promises even if some are rejected
  const allFiles = await Promise.allSettled(promises);

  console.log(allFiles);
}

main([
  './files/test-copy1111.txt',
  './files/test-copy-2.txt',
  './files/test-capitals.txt',
]);
