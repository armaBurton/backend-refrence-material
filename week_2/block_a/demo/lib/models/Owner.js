const pool = require('../utils/pool');

module.exports = class Owner {
  id;
  firstName;
  lastName;
  fullName;

  constructor(row) {
    this.id = row.id;
    this.firstName = row.first_name;
    this.lastName = row.last_name;
    this.fullName = `${this.firstName} ${this.lastName}`;
  }

  static async insert({ firstName, lastName }) {
    const { rows } = await pool.query(
      `
      INSERT INTO
        owners (first_name, last_name)
      VALUES
        ($1, $2)
      RETURNING
        *
      `,
      [firstName, lastName]
    );

    return new Owner(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        owners
      `
    );

    return rows.map((row) => new Owner(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        owners
      WHERE
        id=$1
      `,
      [id]
    );

    if (!rows[0]) return null;

    return new Owner(rows[0]);
  }

  async getDogs() {
    const { rows } = await pool.query(
      `
      SELECT
        dogs.id,
        dogs.name,
        dogs.age,
        dogs.weight
      FROM
        dogs
      LEFT JOIN
        dogs_owners
      ON
        dogs_owners.dog_id = dogs.id
      WHERE
        dogs_owners.owner_id=$1
      `,
      [this.id]
    );

    this.dogs = rows;

    return this;
  }
};
