const Book = require('./Book');
const scrapePage = require('./scrapePage');

async function main() {
  // Retrieving the HTML for a given URL and parsing it
  const results = await Promise.all(
    [...Array(50)].map((_, i) =>
      scrapePage(`https://books.toscrape.com/catalogue/page-${i + 1}.html`)
    )
  );

  const allBooks = results.flat();

  // Save books to DB:
  return Promise.all(allBooks.map((book) => Book.insert(book)));

  // Or sending the book to an API to be saved:
  // Promise.all(
  //   allBooks.map((book) =>
  //     fetch('http://api.example.com/v1/books', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(book),
  //     })
  //   )
  // );
}

main();
