/* Select all customer data */
SELECT * FROM customer;

/* Select all inventory * rental data */
-- EXERCISE 1
SELECT 
  *
FROM
  inventory -- left table
INNER JOIN rental -- right table
-- how we actually join them together:
ON inventory.inventory_id = rental.inventory_id;

/* Select inventory, rental, and film data */
SELECT 
  inventory.inventory_id,
  rental.rental_id,
  film.title
FROM
  inventory
INNER JOIN rental
ON inventory.inventory_id = rental.inventory_id
INNER JOIN film
ON inventory.film_id = film.film_id;

/* What happens if we use a LEFT JOIN? We get an inventory item that's never been rented! */
-- EXERCISE 2
SELECT *
FROM inventory -- left table
  LEFT JOIN rental -- right table
  -- how we actually join them together:
  ON inventory.inventory_id = rental.inventory_id
WHERE rental_id IS NULL -- need this to see which ones aren't rented
;

/* Select all films without actors */
-- EXERCISE 3
SELECT
  *
FROM
  film
LEFT JOIN film_actor
ON film.film_id = film_actor.film_id
WHERE actor_id IS NULL;

/* Select all actors that aren't in any films */
-- EXERCISE 4
SELECT
  *
FROM
  actor
LEFT JOIN film_actor
ON actor.actor_id = film_actor.actor_id
WHERE film_id IS NULL;

/* Select all inventory items that have never been rented */
-- EXERCISE 5
SELECT
  *
FROM
  rental
RIGHT JOIN inventory
ON inventory.inventory_id = rental.inventory_id
WHERE rental_id IS NULL;

/* Select all film data for inventory items that have never been rented */
SELECT
  film.*
FROM
  rental
RIGHT JOIN inventory
ON inventory.inventory_id = rental.inventory_id
INNER JOIN film
ON inventory.film_id = film.film_id
WHERE rental_id IS NULL;

/* Select all films without actors and all actors without films */
-- EXERCISE 6
SELECT
  *
FROM
  film_actor
FULL OUTER JOIN film
ON film.film_id = film_actor.film_id
FULL OUTER JOIN actor
ON film_actor.actor_id = actor.actor_id
WHERE 
  film_actor.actor_id IS NULL
OR
  film_actor.film_id IS NULL;
