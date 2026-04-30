const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 5000;

app.use(express.json());

/* ========= BLOG POSTS ========= */
let posts = [
  { id: 1, title: "Hello", content: "First post" }
];

// GET all posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

// CREATE post
app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content required" });
  }

  const newPost = {
    id: posts.length + 1,
    title,
    content
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

/* ========= BOOKS ========= */
let books = [
  { id: 1, title: "JS Basics", author: "John", year: 2020 }
];

// GET all books
app.get("/books", (req, res) => {
  res.json(books);
});

/* ========= EXTERNAL API ========= */
app.get("/external", async (req, res) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    res.json(response.data.slice(0, 5)); // only 5 items
  } catch (err) {
    res.status(500).json({ message: "Error fetching external data" });
  }
});

/* ========= TEST ROUTE ========= */
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

/* ========= START SERVER ========= */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});