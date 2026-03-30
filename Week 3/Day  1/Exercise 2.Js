let numbers = [123, 8409, 100053, 333333333, 7];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
};

let name = prompt("Enter your name:").toLowerCase();

if (name in guestList) {
  console.log("Hi! I'm " + name + ", and I'm from " + guestList[name]);
} else {
  console.log("Hi! I'm a guest.");
}

let age = [20, 5, 12, 43, 98, 55];

let sum = 0;
let highest = age[0];

for (let i = 0; i < age.length; i++) {
  sum += age[i];

  if (age[i] > highest) {
    highest = age[i];
  }
}

console.log("Sum:", sum);
console.log("Highest age:", highest);