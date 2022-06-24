const fs = require('fs');
const fsPromises = fs.promises;

// 1. read test.txt
// 2. write test-copy.txt with everything from test.txt
// 3. read test-copy.txt
// 4. capitalize all the letter in it
// 5. write all that to test-capitals.txt
console.log('Before actions');

const actions = fsPromises
  .readFile('./test.txt', 'utf8')
  .then((contents) => fsPromises.writeFile('./test-copy.txt', contents))
  .then(() => fsPromises.readFile('./test-copy.txt', 'utf8'))
  .then((contents) => contents.toUpperCase())
  .then((capitalized) =>
    fsPromises.writeFile('./test-capitals.txt', capitalized)
  )
  .then(() => console.log('All done!'))
  .catch((err) => console.error(err));

console.log('After actions');

actions.then(() => console.log('really really done, for real'));

console.log('End of file');
