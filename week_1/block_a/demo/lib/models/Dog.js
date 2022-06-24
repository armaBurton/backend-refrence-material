const pool = require('../utils/pool');

// const ruby = new Dog({ name: 'Ruby', age: 11, favorite_treat: 'Chicken' });

// ruby is an instance of a Dog
// Dog is the actual class (which is an
// object with a name & rules)

// ruby.findById(id); // instance method (default)
// Dog.findById(id); // class/static method

// Math.pow(), JSON.parse(), Date.parse() // static method
// "ruby".toUpperCase(), someArray.map() // instance method

// ruby { id: '1', name: 'Ruby', age: 11, favoriteTreat: 'Chicken' }

// new Dog() is like Dog.constructor(row)

module.exports = class Dog {
  id;
  name;
  age;
  favoriteTreat;

  // gets called when we invoke new Dog()
  constructor(row) {
    // id, name, age, favorite_treat
    this.id = row.id; // database row's id
    this.name = row.name;
    this.age = row.age;
    this.favoriteTreat = row.favorite_treat;
  }

  getGreeting() {
    return `Woof woof, I'm ${this.name} and my favorite treat is ${this.favoriteTreat}`;
  }

  static async insert({ name, age, favoriteTreat }) {
    const { rows } = await pool.query(
      `
      INSERT INTO
        dogs (name, age, favorite_treat)
      VALUES
        ($1, $2, $3)
      RETURNING
        *
      `,
      [name, age, favoriteTreat]
    );

    return new Dog(rows[0]);
  }

  static async findAll() {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        dogs
      `
    );

    // convert all the rows into new Dog instances
    return rows.map((row) => new Dog(row));
  }

  static async findById(id) {
    // get a dog from our database
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

    // convert the database result into an instance of our Dog class
    // and return the new instance we created

    // if we didn't convert the result into a Dog
    // instance(ie.we returned rows[0]), then we wouldn't
    // be able to use any instance methods of our Dog class, eg:

    // const dog = await Dog.findById(1);
    // dog.getGreeting() // this fails if dog is not an instance of our Dog class

    return new Dog(rows[0]);
  }

  static async updateById(id, attributes) {
    const existingDog = await Dog.findById(id);
    const updatedAttributes = { ...existingDog, ...attributes };
    const { name, age, favoriteTreat } = updatedAttributes;
    const { rows } = await pool.query(
      `
      UPDATE
        dogs
      SET
        name=$1,
        age=$2,
        favorite_treat=$3
      WHERE
        id=$4
      RETURNING
        *
      `,
      [name, age, favoriteTreat, id]
    );

    return new Dog(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      `
      DELETE FROM
        dogs
      WHERE
        id=$1
      RETURNING
        *
      `,
      [id]
    );

    return new Dog(rows[0]);
  }
};
