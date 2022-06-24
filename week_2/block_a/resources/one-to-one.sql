DROP TABLE IF EXISTS dogs CASCADE;
DROP TABLE IF EXISTS owners CASCADE;
DROP TABLE IF EXISTS dogs_owners CASCADE;

CREATE TABLE owners (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL
);

-- Need to create owners first to be able to reference it
CREATE TABLE dogs (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  weight TEXT,
  owner_id BIGINT UNIQUE REFERENCES owners(id)
);

-- Add some owners
INSERT INTO owners (first_name, last_name)
VALUES ('Dan', 'Minkevitch');

INSERT INTO owners (first_name, last_name)
VALUES ('Samwise', 'Gamgee');

-- Add some doggos
INSERT INTO dogs (name, age, weight, owner_id)
VALUES ('Ruby', 10, '11 lbs', 1);

INSERT INTO dogs (name, age, weight)
VALUES ('Spot', 5, '20 lbs');

INSERT INTO dogs (name, age, weight)
VALUES ('Banjo', 7, '30 lbs');


SELECT * FROM dogs;
SELECT * FROM owners;

-- LEFT JOIN (owners and any dogs they have)
SELECT
  first_name,
  dogs.name AS dogs_name
FROM owners
LEFT JOIN dogs
ON owners.id = dogs.owner_id;

-- RIGHT JOIN (dogs and their owners, if any)
SELECT
  first_name,
  dogs.name AS dogs_name
FROM owners
RIGHT JOIN dogs
ON owners.id = dogs.owner_id;

-- INNER JOIN (owners who have dogs)
SELECT
  first_name,
  dogs.name AS dogs_name
FROM owners
INNER JOIN dogs
ON owners.id = dogs.owner_id;

-- FULL OUTER JOIN (all dogs & owners)
SELECT
  first_name,
  dogs.name AS dogs_name
FROM owners
FULL OUTER JOIN dogs
ON owners.id = dogs.owner_id;
