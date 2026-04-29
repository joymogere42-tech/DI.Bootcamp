-- =====================================================
 : public database
-- =====================================================

-- 1. All items ordered by price (lowest to highest)
SELECT *
FROM items
ORDER BY price ASC;

-- 2. Items with price above 80 (80 included), highest to lowest
SELECT *
FROM items
WHERE price >= 80
ORDER BY price DESC;

-- 3. First 3 customers in alphabetical order by first name
-- Excluding primary key column
SELECT first_name, last_name
FROM customers
ORDER BY first_name ASC
LIMIT 3;

-- 4. All last names only, reverse alphabetical order
SELECT last_name
FROM customers
ORDER BY last_name DESC;


-- =====================================================
--  : dvdrental database
-- =====================================================

-- 1. Select all columns from customer table
SELECT *
FROM customer;

-- 2. Display names using alias full_name
SELECT first_name || ' ' || last_name AS full_name
FROM customer;

-- 3. All unique create dates
SELECT DISTINCT create_date
FROM customer;

-- 4. All customer details descending by first name
SELECT *
FROM customer
ORDER BY first_name DESC;

-- 5. Film ID, title, description, release year, rental rate
SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC;

-- 6. Address and phone of customers in Texas district
SELECT address, phone
FROM address
WHERE district = 'Texas';

-- 7. Movie details where movie id = 15 or 150
SELECT *
FROM film
WHERE film_id IN (15, 150);

-- 8. Check if favorite movie exists (example: Titanic)
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'Titanic';

-- 9. Movies starting with first two letters (example Ti)
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE 'Ti%';

-- 10. 10 cheapest movies
SELECT *
FROM film
ORDER BY rental_rate ASC
LIMIT 10;

-- 11. Next 10 cheapest movies
SELECT *
FROM film
ORDER BY rental_rate ASC
OFFSET 10
LIMIT 10;

-- Bonus without LIMIT
SELECT *
FROM film
ORDER BY rental_rate ASC
FETCH NEXT 10 ROWS ONLY;

-- 12. Join customer and payment tables
SELECT c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p
ON c.customer_id = p.customer_id
ORDER BY c.customer_id ASC;

-- 13. Movies not in inventory
SELECT *
FROM film
WHERE film_id NOT IN (
    SELECT film_id
    FROM inventory
);

-- 14. Which city is in which country
SELECT city.city, country.country
FROM city
JOIN country
ON city.country_id = country.country_id;

-- 15. Bonus: seller performance
SELECT p.staff_id,
       c.customer_id,
       c.first_name,
       c.last_name,
       p.amount,
       p.payment_date
FROM payment p
JOIN customer c
ON p.customer_id = c.customer_id
ORDER BY p.staff_id ASC;