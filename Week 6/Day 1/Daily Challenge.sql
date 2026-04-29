-- 1. Count how many actors are in the table
SELECT COUNT(*) AS total_actors
FROM actors;

-- 2. Try to add a new actor with blank fields
INSERT INTO actors (first_name, last_name)
VALUES ('', '');

-- Alternative using NULL values
INSERT INTO actors (first_name, last_name)
VALUES (NULL, NULL);

-- Expected Result:
-- If first_name and last_name are NOT NULL:
-- ERROR: null value violates constraint

-- If empty strings are allowed:
-- Row inserted successfully