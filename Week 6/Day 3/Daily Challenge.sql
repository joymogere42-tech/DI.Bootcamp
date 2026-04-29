-- =====================================================
--  : CUSTOMER & CUSTOMER_PROFILE (One to One)
-- =====================================================

-- Create Customer table
CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

-- Create Customer_Profile table
CREATE TABLE Customer_Profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT FALSE,
    customer_id INT UNIQUE REFERENCES Customer(id)
);

-- Insert customers
INSERT INTO Customer (first_name, last_name) VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

-- Insert customer profiles using subqueries
INSERT INTO Customer_Profile (isLoggedIn, customer_id)
VALUES
(TRUE,  (SELECT id FROM Customer WHERE first_name = 'John')),
(FALSE, (SELECT id FROM Customer WHERE first_name = 'Jerome'));

-- -----------------------------------------------------
-- JOINS
-- -----------------------------------------------------

-- 1. first_name of logged in customers
SELECT c.first_name
FROM Customer c
JOIN Customer_Profile cp
ON c.id = cp.customer_id
WHERE cp.isLoggedIn = TRUE;

-- 2. All customers first_name and isLoggedIn
SELECT c.first_name, cp.isLoggedIn
FROM Customer c
LEFT JOIN Customer_Profile cp
ON c.id = cp.customer_id;

-- 3. Number of customers not logged in
SELECT COUNT(*) AS not_logged_in
FROM Customer c
LEFT JOIN Customer_Profile cp
ON c.id = cp.customer_id
WHERE cp.isLoggedIn = FALSE
   OR cp.isLoggedIn IS NULL;



-- =====================================================
-- PART II : BOOK / STUDENT / LIBRARY
-- =====================================================

-- Create Book table
CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL
);

-- Insert books
INSERT INTO Book (title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

-- Create Student table
CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    age INT CHECK (age <= 15)
);

-- Insert students
INSERT INTO Student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

-- Create Library junction table
CREATE TABLE Library (
    book_fk_id INT REFERENCES Book(book_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    student_fk_id INT REFERENCES Student(student_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    borrowed_date DATE,

    PRIMARY KEY (book_fk_id, student_fk_id)
);

-- -----------------------------------------------------
-- Insert records using subqueries
-- -----------------------------------------------------

-- John borrowed Alice In Wonderland
INSERT INTO Library VALUES (
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'John'),
    '2022-02-15'
);

-- Bob borrowed To kill a mockingbird
INSERT INTO Library VALUES (
    (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-03-03'
);

-- Lera borrowed Alice In Wonderland
INSERT INTO Library VALUES (
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'Lera'),
    '2021-05-23'
);

-- Bob borrowed Harry Potter
INSERT INTO Library VALUES (
    (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-08-12'
);

-- -----------------------------------------------------
-- DISPLAY DATA
-- -----------------------------------------------------

-- 1. All columns from junction table
SELECT *
FROM Library;

-- 2. Student name and borrowed books
SELECT s.name, b.title
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

-- 3. Average age of children who borrowed Alice In Wonderland
SELECT AVG(s.age) AS average_age
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

-- -----------------------------------------------------
-- Delete a student
-- -----------------------------------------------------

DELETE FROM Student
WHERE name = 'Bob';

-- Result:
-- Bob is deleted from Student table
-- His related rows in Library are automatically deleted
-- because of ON DELETE CASCADE