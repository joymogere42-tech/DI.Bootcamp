// server.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json()); // parse JSON bodies

// Database setup for PostgreSQL
const { Pool } = require('pg');
const pool = new Pool({
  user: 'your_username',     // replace with your PostgreSQL username
  host: 'localhost',         // your host
  database: 'your_dbname',   // your database name
  password: 'your_password', // your password
  port: 5432,                // default port
});

// --- Exercise 1: Blog Posts API --- //

// 1. Create posts table in PostgreSQL (run this SQL in your database):
/*
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  content TEXT
);
*/

// 2. Posts Controller functions
const postsController = {
  getAllPosts: async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM posts');
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch posts' });
    }
  },

  getPostById: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch post' });
    }
  },

  createPost: async (req, res) => {
    const { title, content } = req.body;
    try {
      const result = await pool.query(
        'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *',
        [title, content]
      );
      res.status(201).json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create post' });
    }
  },

  updatePost: async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
      const result = await pool.query(
        'UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *',
        [title, content, id]
      );
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update post' });
    }
  },

  deletePost: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.json({ message: 'Post deleted', post: result.rows[0] });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete post' });
    }
  }
};

// 3. Posts routes
const postsRoutes = express.Router();
postsRoutes.get('/posts', postsController.getAllPosts);
postsRoutes.get('/posts/:id', postsController.getPostById);
postsRoutes.post('/posts', postsController.createPost);
postsRoutes.put('/posts/:id', postsController.updatePost);
postsRoutes.delete('/posts/:id', postsController.deletePost);
app.use('/', postsRoutes);

// --- Exercise 2: Books API with in-memory data --- //

// In-memory books array
let books = [
  { id: 1, title: 'Book One', author: 'Author A', publishedYear: 2000 },
  { id: 2, title: 'Book Two', author: 'Author B', publishedYear: 2010 }
];

// 1. Read all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// 2. Read a specific book
app.get('/api/books/:bookId', (req, res) => {
  const { bookId } = req.params;
  const book = books.find(b => b.id === parseInt(bookId));
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// 3. Create a new book
app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});