-- =====================================================
- : DVD RENTAL
-- =====================================================

-- 1. Get all languages
SELECT *
FROM language;

-- 2. All films joined with their languages
SELECT f.title,
       f.description,
       l.name AS language_name
FROM film f
JOIN language l
ON f.language_id = l.language_id;

-- 3. Get all languages even if no films exist in them
SELECT f.title,
       f.description,
       l.name AS language_name
FROM language l
LEFT JOIN film f
ON l.language_id = f.language_id;

-- 4. Create new_film table
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Insert films
INSERT INTO new_film (name) VALUES
('The Last Warrior'),
('Ocean Secrets'),
('Night Escape');

-- 5. Create customer_review table
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT REFERENCES language(language_id),
    title VARCHAR(255),
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. Add 2 reviews
INSERT INTO customer_review
(film_id, language_id, title, score, review_text)
VALUES
(1, 1, 'Amazing Movie', 9, 'Very exciting story'),
(2, 1, 'Good Watch', 7, 'Interesting scenes');

-- 7. Delete a film with reviews
DELETE FROM new_film
WHERE id = 1;

-- Result:
-- Reviews linked to film_id = 1 are automatically deleted
-- because of ON DELETE CASCADE


-- =====================================================
--  : DVD RENTAL
-- =====================================================

-- 1. Update language of some films
UPDATE film
SET language_id = 2
WHERE film_id IN (1,2,3);

-- 2. Check foreign keys on customer table
SELECT
    tc.constraint_name,
    kcu.column_name,
    ccu.table_name AS referenced_table,
    ccu.column_name AS referenced_column
FROM information_schema.table_constraints tc
JOIN information_schema.key_column_usage kcu
     ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage ccu
     ON ccu.constraint_name = tc.constraint_name
WHERE tc.table_name = 'customer'
AND tc.constraint_type = 'FOREIGN KEY';

-- 3. Drop customer_review table
DROP TABLE customer_review;

-- Note:
-- If another table depends on it,
-- DROP TABLE customer_review CASCADE may be needed


-- 4. Rentals still outstanding (not returned)
SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;

-- 5. 30 most expensive outstanding movies
SELECT f.title,
       f.replacement_cost
FROM rental r
JOIN inventory i
ON r.inventory_id = i.inventory_id
JOIN film f
ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.replacement_cost DESC
LIMIT 30;

-- =====================================================
-- FIND THE 4 MOVIES
-- =====================================================

-- 1st Film:
-- About a sumo wrestler, actor Penelope Monroe
SELECT DISTINCT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE f.description ILIKE '%sumo%'
AND a.first_name = 'Penelope'
AND a.last_name = 'Monroe';

-- 2nd Film:
-- Short documentary (<1 hour), rated R
SELECT title
FROM film
WHERE length < 60
AND rating = 'R'
AND description ILIKE '%documentary%';

-- 3rd Film:
-- Matthew Mahan rented it, paid > 4.00
-- returned between July 28 and Aug 1 2005
SELECT DISTINCT f.title
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN payment p ON r.rental_id = p.rental_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew'
AND c.last_name = 'Mahan'
AND p.amount > 4.00
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- 4th Film:
-- Matthew Mahan watched it too
-- word boat in title or description
-- expensive replacement cost
SELECT DISTINCT f.title,
       f.replacement_cost
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew'
AND c.last_name = 'Mahan'
AND (
     f.title ILIKE '%boat%'
     OR f.description ILIKE '%boat%'
)
ORDER BY f.replacement_cost DESC;