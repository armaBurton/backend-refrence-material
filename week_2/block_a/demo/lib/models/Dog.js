const pool = require('../utils/pool');

module.exports = class Dog {
  id;
  name;
  age;
  weight;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.age = row.age;
    this.weight = row.weight;
  }

  static async insert({ name, age, weight }) {
    const { rows } = await pool.query(
      `
      INSERT INTO
        dogs (name, age, weight)
      VALUES
        ($1, $2, $3)
      RETURNING
        *
      `,
      [name, age, weight]
    );

    return new Dog(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        dogs
      `
    );

    return rows.map((row) => new Dog(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        dogs
      WHERE
        id=$1
      `,
      [id]
    );

    if (!rows[0]) return null;

    return new Dog(rows[0]);
  }

  async getOwners() {
    const { rows } = await pool.query(
      `
      SELECT
        owners.id,
        owners.first_name,
        owners.last_name
      FROM
        owners
      LEFT JOIN
        dogs_owners
      ON
        owners.id = dogs_owners.owner_id
      WHERE
        dogs_owners.dog_id=$1
      `,
      [this.id]
    );

    this.owners = rows;

    return this;
  }
};
