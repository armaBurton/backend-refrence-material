const fs = require('fs');

// 1. read test.txt
// 2. write test-copy.txt with everything from test.txt
// 3. read test-copy.txt
// 4. capitalize all the letter in it
// 5. write all that to test-capitals.txt
console.log('Before actions');

fs.readFile('./test.txt', 'utf-8', (err, data) => {
  if (err) return console.error(err);

  fs.writeFile('./test-copy.txt', data, (err) => {
    if (err) return console.error(err);

    fs.readFile('./test-copy.txt', 'utf-8', (err, copiedContents) => {
      if (err) return console.error(err);

      const capitalized = copiedContents.toUpperCase();

      fs.writeFile('./test-capitals.txt', capitalized, (err) => {
        if (err) return console.error(err);

        console.log('All done!');
      });
    });
  });
});

console.log('After actions & End of file');
