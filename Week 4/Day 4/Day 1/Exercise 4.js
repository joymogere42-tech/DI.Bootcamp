// ============================
// Exercise 1 : Dog age to Human years
// ============================

const data = [
  { name: 'Butters', age: 3, type: 'dog' },
  { name: 'Cuty', age: 5, type: 'rabbit' },
  { name: 'Lizzy', age: 6, type: 'dog' },
  { name: 'Red', age: 1, type: 'cat' },
  { name: 'Joey', age: 3, type: 'dog' },
  { name: 'Rex', age: 10, type: 'dog' },
];

// Using loop
let sumLoop = 0;

for (let animal of data) {
  if (animal.type === "dog") {
    sumLoop += animal.age * 7;
  }
}

console.log("Loop total dog years:", sumLoop);
// Output: Loop total dog years: 154

// Using reduce
const sumReduce = data.reduce((acc, animal) => {
  if (animal.type === "dog") {
    return acc + animal.age * 7;
  }
  return acc;
}, 0);

console.log("Reduce total dog years:", sumReduce);
// Output: Reduce total dog years: 154


// ============================
// Exercise 2 : Email cleanup
// ============================

const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';

const cleanEmail = userEmail3.trim();

console.log(cleanEmail);
// Output: cannotfillemailformcorrectly@gmail.com


// ============================
// Exercise 3 : Employees #3
// ============================

const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

// Convert to object: "Full Name" => role
let userObject = {};

for (let user of users) {
  const fullName = `${user.firstName} ${user.lastName}`;
  userObject[fullName] = user.role;
}

console.log(userObject);
// Output:
// {
//   'Bradley Bouley': 'Full Stack Resident',
//   'Chloe Alnaji': 'Full Stack Resident',
//   'Jonathan Baughn': 'Enterprise Instructor',
//   'Michael Herman': 'Lead Instructor',
//   'Robert Hajek': 'Full Stack Resident',
//   'Wes Reid': 'Instructor',
//   'Zach Klabunde': 'Instructor'
// }


// ============================
// Exercise 4 : Array to Object
// ============================

const letters = ['x', 'y', 'z', 'z'];

// Using for loop
let countObj = {};

for (let letter of letters) {
  if (countObj[letter]) {
    countObj[letter]++;
  } else {
    countObj[letter] = 1;
  }
}

console.log("For loop result:", countObj);
// Output: { x: 1, y: 1, z: 2 }


// Using reduce
const reduceResult = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});

console.log("Reduce result:", reduceResult);
// Output: { x: 1, y: 1, z: 2 }