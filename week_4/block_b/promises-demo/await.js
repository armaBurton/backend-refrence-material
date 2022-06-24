const fs = require('fs');
const fsPromises = fs.promises;

// 1. read test.txt
// 2. write test-copy.txt with everything from test.txt
// 3. read test-copy.txt
// 4. capitalize all the letter in it
// 5. write all that to test-capitals.txt
console.log('Before actions');

async function main() {
  try {
    const contents = await fsPromises.readFile('./test.txt', 'utf8');

    await fsPromises.writeFile('./test-copy.txt', contents);

    const copiedContents = await fsPromises.readFile('./test-copy.txt', 'utf8');
    const capitalized = copiedContents.toUpperCase();

    await fsPromises.writeFile('./test-capitals.txt', capitalized);

    console.log(contents);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Finally done!');
  }
}

console.log('After actions');

main();

console.log('End of file');
