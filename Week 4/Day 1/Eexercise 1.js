// 🌟 Exercise 1: Colors
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

console.log("Exercise 1 Output:");

// Display colors with order
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

// Check if Violet exists
console.log(colors.includes("Violet") ? "Yeah" : "No...");



// 🌟 Exercise 2: Colors #2
const ordinal = ["th", "st", "nd", "rd"];

console.log("\nExercise 2 Output:");

colors.forEach((color, index) => {
    let suffix = (index === 0) ? "st"
                : (index === 1) ? "nd"
                : (index === 2) ? "rd"
                : "th";

    console.log(`${index + 1}${suffix} choice is ${color}.`);
});



// 🌟 Exercise 3: Analyzing

console.log("\nExercise 3 Output:");

// 1
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// ["bread","carrot","potato","chicken","apple","orange"]

// 2
const country = "USA";
console.log([...country]);
// ["U","S","A"]

// Bonus
let newArray = [...[,,]];
console.log(newArray);
// [undefined, undefined]



// 🌟 Exercise 4: Employees
const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

console.log("\nExercise 4 Output:");

// 1. Welcome messages
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);

// 2. Filter Full Stack Residents
const fullStackResidents = users.filter(user => user.role === "Full Stack Resident");
console.log(fullStackResidents);

// 3. Bonus: last names of Full Stack Residents
const lastNames = users
  .filter(user => user.role === "Full Stack Resident")
  .map(user => user.lastName);

console.log(lastNames);



// 🌟 Exercise 5: Star Wars
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

console.log("\nExercise 5 Output:");

const sentence = epic.reduce((acc, word) => acc + " " + word);
console.log(sentence);



// 🌟 Exercise 6: Students
const students = [
  {name: "Ray", course: "Computer Science", isPassed: true}, 
  {name: "Liam", course: "Computer Science", isPassed: false}, 
  {name: "Jenner", course: "Information Technology", isPassed: true}, 
  {name: "Marco", course: "Robotics", isPassed: true}, 
  {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
  {name: "Jamie", course: "Big Data", isPassed: false}
];

console.log("\nExercise 6 Output:");

// 1. Passed students
const passedStudents = students.filter(s => s.isPassed === true);
console.log(passedStudents);

// 2. Bonus: congratulations
passedStudents.forEach(s => {
    console.log(`Good job ${s.name}, you passed the course in ${s.course}`);
});