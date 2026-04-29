-- Create database
CREATE DATABASE public;

-- Connect to database
-- Create items table
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    item_name VARCHAR(50),
    price INT
);

-- Create customers table
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);

-- Insert records into items
INSERT INTO items (item_name, price) VALUES
('Small Desk', 100),
('Large Desk', 300),
('Fan', 80);

-- Insert records into customers
INSERT INTO customers (first_name, last_name) VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');

--------------------------------------------------
-- QUERIES
--------------------------------------------------

-- All the items
SELECT * FROM items;

-- All items with price above 80
SELECT * FROM items
WHERE price > 80;

-- All items with price below 300 (300 included)
SELECT * FROM items
WHERE price <= 300;

-- Customers whose last name is Smith
SELECT * FROM customers
WHERE last_name = 'Smith';

-- Outcome: No rows found

-- Customers whose last name is Jones
SELECT * FROM customers
WHERE last_name = 'Jones';

-- Customers whose firstname is not Scott
SELECT * FROM customers
WHERE first_name <> 'Scott';