const express = require("express");
const app = express();

app.use(express.json());

/* -------------------------
    HOME ROUTES (Exercise 1)
--------------------------*/
app.get("/", (req, res) => {
  res.send(" Home Page");
});

app.get("/about", (req, res) => {
  res.send(" About Page");
});

/* -------------------------
    TODOS (Exercise 2)
--------------------------*/
let todos = [];
let todoId = 1;

// GET all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// CREATE todo
app.post("/todos", (req, res) => {
  const todo = { id: todoId++, task: req.body.task };
  todos.push(todo);
  res.json(todo);
});

// UPDATE todo
app.put("/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id == req.params.id);
  if (!todo) return res.send("Todo not found");

  todo.task = req.body.task;
  res.json(todo);
});

// DELETE todo
app.delete("/todos/:id", (req, res) => {
  todos = todos.filter(t => t.id != req.params.id);
  res.json({ message: "Todo deleted" });
});

/* -------------------------
    BOOKS (Exercise 3)
--------------------------*/
let books = [];
let bookId = 1;

// GET all books
app.get("/books", (req, res) => {
  res.json(books);
});

// CREATE book
app.post("/books", (req, res) => {
  const book = { id: bookId++, title: req.body.title };
  books.push(book);
  res.json(book);
});

// UPDATE book
app.put("/books/:id", (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.send("Book not found");

  book.title = req.body.title;
  res.json(book);
});

// DELETE book
app.delete("/books/:id", (req, res) => {
  books = books.filter(b => b.id != req.params.id);
  res.json({ message: "Book deleted" });
});

/* -------------------------
    START SERVER
--------------------------*/
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});