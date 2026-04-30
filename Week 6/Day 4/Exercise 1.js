// =====================================================
// EXERCISE 1 (CommonJS simulated in one file)
// =====================================================

const products = [
  { name: "Laptop", price: 800, category: "Electronics" },
  { name: "Phone", price: 500, category: "Electronics" },
  { name: "Shoes", price: 100, category: "Fashion" }
];

function findProduct(name) {
  const product = products.find(p => p.name === name);
  console.log("Product found:", product);
}

findProduct("Laptop");
findProduct("Phone");


// =====================================================
// EXERCISE 2 (ES6 simulation)
// =====================================================

const people = [
  { name: "John", age: 20 },
  { name: "Mary", age: 25 },
  { name: "James", age: 30 }
];

function averageAge() {
  const avg = people.reduce((sum, p) => sum + p.age, 0) / people.length;
  console.log("Average Age:", avg);
}

averageAge();


// =====================================================
// EXERCISE 3 (File system simulation)
// =====================================================

const fs = require("fs");

// simulate files (instead of real separate files)
fs.writeFileSync("Hello World.txt", "Hello World !!");
fs.writeFileSync("Bye World.txt", "Bye World !!");

function readFile(file) {
  return fs.readFileSync(file, "utf8");
}

function writeFile(file, content) {
  fs.writeFileSync(file, content);
}

console.log("Read:", readFile("Hello World.txt"));
writeFile("Bye World.txt", "Writing to the file");


// =====================================================
// EXERCISE 4 (Todo List)
// =====================================================

class TodoList {
  constructor() {
    this.tasks = [];
  }

  add(task) {
    this.tasks.push({ task, done: false });
  }

  complete(task) {
    const t = this.tasks.find(x => x.task === task);
    if (t) t.done = true;
  }

  list() {
    console.log("Todo List:", this.tasks);
  }
}

const todo = new TodoList();
todo.add("Learn Node.js");
todo.add("Build Project");
todo.complete("Learn Node.js");
todo.list();


// =====================================================
// EXERCISE 5 (Math + lodash simulation)
// =====================================================

const _ = {
  chunk: (arr, size) => {
    let res = [];
    for (let i = 0; i < arr.length; i += size) {
      res.push(arr.slice(i, i + size));
    }
    return res;
  }
};

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log("Add:", add(2, 3));
console.log("Multiply:", multiply(3, 4));
console.log("Chunk:", _.chunk([1,2,3,4,5,6], 2));


// =====================================================
// EXERCISE 6 (chalk simulation)
// =====================================================

function color(text, colorName) {
  return `[${colorName.toUpperCase()}] ${text}`;
}

console.log(color("Hello World", "blue"));
console.log(color("Success Message", "green"));
console.log(color("Error Message", "red"));


// =====================================================
// EXERCISE 7 (File copy + directory listing)
// =====================================================

// create source file
fs.writeFileSync("source.txt", "This is source file");

// copy file
const data = fs.readFileSync("source.txt", "utf8");
fs.writeFileSync("destination.txt", data);

console.log("File copied");

// list directory
const files = fs.readdirSync(".");
console.log("Files in folder:", files);