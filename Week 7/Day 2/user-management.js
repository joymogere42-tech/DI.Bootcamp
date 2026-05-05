// user-management.js

const express = require('express');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');

const app = express();
app.use(express.json()); // Parse JSON bodies

// Database connection
const pool = new Pool({
  user: 'your_username',     // replace with your PostgreSQL username
  host: 'localhost',
  database: 'your_dbname',   // replace with your database name
  password: 'your_password', // replace with your password
  port: 5432,
});

// --- Database Tables Setup ---
// Run these SQL commands in your PostgreSQL to create tables:

/*
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL,
  first_name VARCHAR(50),
  last_name VARCHAR(50)
);

CREATE TABLE hashpwd (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);
*/

// --- Models ---
const createUser = async (userData, hashedPassword) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const insertUserText = `
      INSERT INTO users (email, username, first_name, last_name)
      VALUES ($1, $2, $3, $4)
      RETURNING *`;
    const userValues = [
      userData.email,
      userData.username,
      userData.first_name,
      userData.last_name,
    ];
    const resUser = await client.query(insertUserText, userValues);
    const insertHashText = `
      INSERT INTO hashpwd (username, password)
      VALUES ($1, $2)
    `;
    await client.query(insertHashText, [userData.username, hashedPassword]);
    await client.query('COMMIT');
    return resUser.rows[0];
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
};

const getAllUsers = async () => {
  const res = await pool.query('SELECT * FROM users');
  return res.rows;
};

const getUserById = async (id) => {
  const res = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return res.rows[0];
};

const updateUserById = async (id, updateData) => {
  const { email, username, first_name, last_name } = updateData;
  const res = await pool.query(
    `UPDATE users SET email=$1, username=$2, first_name=$3, last_name=$4 WHERE id=$5 RETURNING *`,
    [email, username, first_name, last_name, id]
  );
  return res.rows[0];
};

const getPasswordHashByUsername = async (username) => {
  const res = await pool.query('SELECT password FROM hashpwd WHERE username=$1', [username]);
  return res.rows[0]?.password;
};

// --- Controllers ---

// Register user
const registerUser = async (req, res) => {
  const { email, username, first_name, last_name, password } = req.body;
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await createUser({ email, username, first_name, last_name }, hashedPassword);
    res.status(201).json({ message: 'User registered', user: newUser });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed', details: err.message });
  }
};

// Login user
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const storedHash = await getPasswordHashByUsername(username);
    if (!storedHash) return res.status(400).json({ message: 'Invalid username or password' });
    const match = await bcrypt.compare(password, storedHash);
    if (match) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(400).json({ message: 'Invalid username or password' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Login failed', details: err.message });
  }
};

// Get all users
const getAllUsersController = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// Get user by ID
const getUserByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

// Update user by ID
const updateUserController = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updatedUser = await updateUserById(id, updateData);
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User updated', user: updatedUser });
  } catch (err) {
    res.status(500).json({ error: 'Update failed' });
  }
};

// --- Routes ---
app.post('/register', registerUser);
app.post('/login', loginUser);
app.get('/users', getAllUsersController);
app.get('/users/:id', getUserByIdController);
app.put('/users/:id', updateUserController);

// --- Start server ---
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});