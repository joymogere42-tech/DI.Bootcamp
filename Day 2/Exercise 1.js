//  Exercise 1
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
};

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`Exercise 1 Output:`);
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


//  Exercise 2
function displayStudentInfo(objUser){
    const { first, last } = objUser;
    return `Your full name is ${first} ${last}`;
}

console.log(`\nExercise 2 Output:`);
console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));


//  Exercise 3
const users = { user1: 18273, user2: 92833, user3: 90315 };

// Convert to array
let usersArray = Object.entries(users);
console.log(`\nExercise 3 Output (Part 1):`);
console.log(usersArray);

// Multiply IDs by 2
let updatedUsers = usersArray.map(([user, id]) => [user, id * 2]);
console.log(`Exercise 3 Output (Part 2):`);
console.log(updatedUsers);


//  Exercise 4
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(`\nExercise 4 Output:`);
console.log(typeof member); // object


//  Exercise 5
// Correct answer is option 2
class Dog {
  constructor(name) {
    this.name = name;
  }
};

class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

const myDog = new Labrador("Buddy", "Large");
console.log(`\nExercise 5 Output:`);
console.log(myDog);


//  Exercise 6

// Part 1: True or False
console.log(`\nExercise 6 Output (Part 1):`);
console.log(JSON.stringify([2]) === JSON.stringify([2])); // true
console.log(JSON.stringify({}) === JSON.stringify({})); // true


// Part 2: Object references
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5 };

object1.number = 4;

console.log(`\nExercise 6 Output (Part 2):`);
console.log(object2.number); // 4
console.log(object3.number); // 4
console.log(object4.number); // 5


// Part 3: Classes
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  sound(sound) {
    return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

const farmerCow = new Mammal("Lily", "cow", "brown and white");

console.log(`\nExercise 6 Output (Part 3):`);
console.log(farmerCow.sound("Moooo"));