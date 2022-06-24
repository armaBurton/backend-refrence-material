const pool = require('../utils/pool');
const jwt = require('jsonwebtoken');

module.exports = class User {
  id;
  username;
  #passwordHash;

  constructor(row) {
    this.id = row.id;
    this.username = row.username;
    this.#passwordHash = row.password_hash;
  }

  static async insert({ username, passwordHash }) {
    const { rows } = await pool.query(
      `
      INSERT INTO
        users (username, password_hash)
      VALUES
        ($1, $2)
      RETURNING
        *
      `,
      [username, passwordHash]
    );

    return new User(rows[0]);
  }

  static async findByUsername(username) {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        users
      WHERE
        username=$1
      `,
      [username]
    );

    if (!rows[0]) return null;

    return new User(rows[0]);
  }

  // allows us to get a user's password hash
  // just by calling `user.passwordHash` (where
  // user is an instance of the User class)
  get passwordHash() {
    return this.#passwordHash;
  }

  // We can also set that property directly by
  // using a `set` keyword:
  set passwordHash(newHash) {
    this.#passwordHash = newHash;
  }

  // get methods can also compute dynamic properties
  // e.g. getting a "fullName" based on a user's
  // first & last names combined:
  // user.fullName === 'Ruby California'
  // get fullName() {
  //   return `${this.firstName} ${this.lastName}`;
  // }

  authToken() {
    return jwt.sign({ ...this }, process.env.JWT_SECRET, {
      expiresIn: '1 day',
    });
  }
};
