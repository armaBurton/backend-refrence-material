const pool = require('../utils/pool');

module.exports = class User {
  username;
  photoUrl;

  constructor(row) {
    this.username = row.github_username;
    this.photoUrl = row.github_photo_url;
  }

  static async insert({ username, photoUrl }) {
    const { rows } = await pool.query(
      `
      INSERT INTO
        users (github_username, github_photo_url)
      VALUES
        ($1, $2)
      RETURNING
        *
      `,
      [username, photoUrl]
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
        github_username=$1
      `,
      [username]
    );

    if (rows.length < 1) return null;
    return new User(rows[0]);
  }

  static async findByUsernameWithTweets(username) {
    const { rows } = await pool.query(
      `
      SELECT
        username,
        tweets.text as tweets
      FROM
        users
      INNER JOIN
        tweets
      ON
        users.github_username = tweets.username
      WHERE
        username=$1
      GROUP BY
        username
      `,
      [username]
    );

    return rows[0];
  }
};
