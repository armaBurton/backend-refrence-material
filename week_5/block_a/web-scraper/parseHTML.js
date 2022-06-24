const { JSDOM } = require('jsdom');

module.exports = async function parseHTML(html) {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // Get all the elements for the current page and return them:
  const elements = document.querySelectorAll('.product_pod');
  return [...elements].map((product) => ({
    title: product.querySelector('h3 a').getAttribute('title'),
    cover: product.querySelector('.image_container img').src,
    price: product.querySelector('.product_price .price_color').textContent,
  }));
};
