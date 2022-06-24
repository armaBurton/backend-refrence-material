module.exports = class Book {
  id;
  title;
  cover;
  price;

  constructor(row) {
    // standard stuff here
  }

  static async insert({ title, cover, price }) {
    // standard insert method here
  }
};
