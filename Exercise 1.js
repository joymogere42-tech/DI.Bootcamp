// =======================
// Exercise 1: People
// =======================

let people = ["Greg", "Mary", "Devon", "James"];

// Remove "Greg"
people.shift();

// Replace "James" with "Jason"
people[people.indexOf("James")] = "Jason";

// Add your name to the end
people.push("Joy");

// Log Mary's index
console.log("Mary index:", people.indexOf("Mary"));

// Copy array without Mary and your name
let copy = people.slice(1, 3);
console.log("Copy:", copy);

// Index of "Foo"
let fooIndex = people.indexOf("Foo");
console.log("Index of Foo:", fooIndex !== -1 ? fooIndex : -1);

// Last element
let last = people[people.length - 1];
console.log("Last element:", last);

// =======================
// Part II - Loops
// =======================

// Loop and print all
for (let person of people) {
    console.log(person);
}

// Loop and stop at Devon
for (let person of people) {
    console.log(person);
    if (person === "Devon") {
        break;
    }
}

// =======================
// Exercise 2: Colors
// =======================

let colors = ["blue", "red", "green", "yellow", "purple"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// Bonus with suffix
let suffix = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffix[i]} choice is ${colors[i]}`);
}

// =======================
// Exercise 3: Repeat Question
// =======================

let number = null;

// Uncomment to run interactively
// while (true) {
//     number = parseInt(prompt("Enter a number: "));
//     if (number >= 10) {
//         break;
//     }
// }

// =======================
// Exercise 4: Building
// =======================

let building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
};

// Number of floors
console.log("Floors:", building.numberOfFloors);

// Apartments on floor 1 and 3
console.log("First floor apts:", building.numberOfAptByFloor.firstFloor);
console.log("Third floor apts:", building.numberOfAptByFloor.thirdFloor);

// Second tenant and rooms
let secondTenant = building.nameOfTenants[1];
console.log("Second tenant:", secondTenant);
console.log("Rooms:", building.numberOfRoomsAndRent.dan[0]);

// Rent comparison
let sarahRent = building.numberOfRoomsAndRent.sarah[1];
let davidRent = building.numberOfRoomsAndRent.david[1];
let danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}

console.log("Updated Dan rent:", building.numberOfRoomsAndRent.dan[1]);

// =======================
// Exercise 5: Family
// =======================

let family = {
    father: "John",
    mother: "Jane",
    child: "Chris",
};

// Keys
for (let key in family) {
    console.log(key);
}

// Values
for (let key in family) {
    console.log(family[key]);
}

// =======================
// Exercise 6: Rudolf
// =======================

let details = {
    my: "name",
    is: "Rudolf",
    the: "reindeer",
};

let sentence = "";

for (let key in details) {
    sentence += key + " " + details[key] + " ";
}

console.log(sentence.trim());