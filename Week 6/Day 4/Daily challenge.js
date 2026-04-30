
// ===============================
// TASK 1: Greeting
// ===============================
function greet(name) {
  return `Hello ${name}, welcome to Node.js!`;
}

// ===============================
// TASK 2: Chalk simulation (REAL chalk if installed, fallback if not)
// ===============================
let chalk;

try {
  chalk = require("chalk");
} catch (err) {
  // fallback if chalk is not installed
  chalk = {
    blue: (t) => `BLUE: ${t}`,
    green: (t) => `GREEN: ${t}`,
    red: (t) => `RED: ${t}`
  };
}

function colorfulMessage() {
  console.log(chalk.blue("This is a blue message"));
  console.log(chalk.green("This is a green message"));
  console.log(chalk.red("This is a red message"));
}

// ===============================
// TASK 3: File System
// ===============================
const fs = require("fs");

// create folder + file automatically if not exists
if (!fs.existsSync("files")) {
  fs.mkdirSync("files");
}

fs.writeFileSync("files/file-data.txt", "Hello from file-data.txt!");

function readFileContent() {
  const data = fs.readFileSync("files/file-data.txt", "utf8");
  console.log("File Content:", data);
}

// ===============================
// CHALLENGE RUNNER
// ===============================
function runChallenge() {
  console.log(greet("Student"));
  console.log("");

  colorfulMessage();
  console.log("");

  readFileContent();
}

// RUN PROGRAM
runChallenge();