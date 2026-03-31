// ============================
// 🌟 Exercise 1
// ============================
function displayNumbersDivisible(divisor = 23) {
  let sum = 0;

  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum += i;
    }
  }

  console.log("Sum:", sum);
}

// Run
displayNumbersDivisible();      // default 23
displayNumbersDivisible(3);
displayNumbersDivisible(45);


// ============================
// 🌟 Exercise 2
// ============================
const stock = { 
  banana: 6, 
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1
};

const prices = {    
  banana: 4, 
  apple: 2, 
  pear: 1,
  orange: 1.5,
  blueberry: 10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let total = 0;

  for (let item of shoppingList) {
    if (item in stock && stock[item] > 0) {
      total += prices[item];
      stock[item]--; // bonus
    }
  }

  return total;
}

console.log("Total Bill:", myBill());


// ============================
// 🌟 Exercise 3
// ============================
function changeEnough(price, change) {
  let total =
    change[0] * 0.25 +
    change[1] * 0.10 +
    change[2] * 0.05 +
    change[3] * 0.01;

  return total >= price;
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2,100,0,0]));
console.log(changeEnough(0.75, [0,0,20,5]));


// ============================
// 🌟 Exercise 4
// ============================
function hotelCost(nights) {
  while (isNaN(nights) || nights === "") {
    nights = prompt("Enter number of nights:");
  }
  return nights * 140;
}

function planeRideCost(destination) {
  while (!destination) {
    destination = prompt("Enter destination:");
  }

  destination = destination.toLowerCase();

  if (destination === "london") return 183;
  if (destination === "paris") return 220;

  return 300;
}

function rentalCarCost(days) {
  while (isNaN(days) || days === "") {
    days = prompt("Enter number of days:");
  }

  let cost = days * 40;

  if (days > 10) {
    cost *= 0.95;
  }

  return cost;
}

function totalVacationCost() {
  let nights = prompt("How many nights?");
  let destination = prompt("Destination?");
  let days = prompt("Car rental days?");

  let total =
    hotelCost(nights) +
    planeRideCost(destination) +
    rentalCarCost(days);

  console.log("Total Vacation Cost:", total);
}

// Uncomment to run
// totalVacationCost();


// ============================
// 🌟 Exercise 5
// ============================
let div = document.getElementById("container");
console.log(div);

// Change Pete → Richard
let lists = document.querySelectorAll(".list");
lists[0].children[1].textContent = "Richard";

// Remove Sarah
lists[1].children[1].remove();

// Change first names
for (let ul of lists) {
  ul.children[0].textContent = "JOY";
}

// Add classes
for (let ul of lists) {
  ul.classList.add("student_list");
}
lists[0].classList.add("university", "attendance");

// Style
div.style.backgroundColor = "lightblue";
div.style.padding = "10px";

// Hide Dan
lists[1].lastElementChild.style.display = "none";

// Border Richard
lists[0].children[1].style.border = "2px solid black";

// Font size
document.body.style.fontSize = "18px";

// Bonus alert
if (div.style.backgroundColor === "lightblue") {
  alert("Hello JOY and JOY");
}


// ============================
// 🌟 Exercise 6
// ============================
let nav = document.getElementById("navBar");
nav.setAttribute("id", "socialNetworkNavigation");

let ul = nav.querySelector("ul");

// Create Logout
let li = document.createElement("li");
li.textContent = "Logout";
ul.appendChild(li);

// First and last items
console.log(ul.firstElementChild.textContent);
console.log(ul.lastElementChild.textContent);


// ============================
// 🌟 Exercise 7
// ============================
const allBooks = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    alreadyRead: true
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://covers.openlibrary.org/b/id/8231996-L.jpg",
    alreadyRead: false
  }
];

let section = document.querySelector(".listBooks");

for (let book of allBooks) {
  let div = document.createElement("div");

  let p = document.createElement("p");
  p.textContent = `${book.title} written by ${book.author}`;

  if (book.alreadyRead) {
    p.style.color = "red";
  }

  let img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";

  div.appendChild(p);
  div.appendChild(img);

  section.appendChild(div);
}