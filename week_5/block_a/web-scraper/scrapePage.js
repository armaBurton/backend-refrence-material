const fetch = require('cross-fetch');
const parseHTML = require('./parseHTML');

module.exports = async function scrapePage(url) {
  // Fetch the HTML for the page:
  const resp = await fetch(url);
  const html = await resp.text();

  // Parse the HTML into an array of objects:
  return parseHTML(html);
};
