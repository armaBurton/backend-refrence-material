-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS dogs;
DROP TABLE IF EXISTS songs;
DROP TABLE IF EXISTS books;

CREATE TABLE dogs (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  age INT NOT NULL CHECK (age > -1),
  favorite_treat TEXT
);

CREATE TABLE songs (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  artist TEXT NOT NULL,
  length INT
);

CREATE TABLE books (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  pages INT
);

INSERT INTO
  dogs (name, age, favorite_treat)
VALUES
  ('Ruby', 11, 'Chicken'),
  ('Rusty', 12, 'Tuna');
