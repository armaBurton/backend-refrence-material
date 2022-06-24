const pool = require('../utils/pool');

module.exports = class Profile {
  id;
  username;
  quote;

  constructor(row) {
    this.id = row.id;
    this.username = row.username;
    this.quote = row.quote;
  }

  static async insert({ username, quote }) {
    const { rows } = await pool.query(
      `
      INSERT INTO
        profiles (username, quote)
      VALUES
        ($1, $2)
      RETURNING
        *
    `,
      [username, quote]
    );

    console.log('row from postgres', rows[0]);

    return new Profile(rows[0]);
  }
};
